import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    loading: false,
    error: null
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        updateCartItem: (state, action) => {
            const { productId, quantity } = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === productId);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity = quantity;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        }
    }
});

export const { setLoading, setError, updateCartItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer; 
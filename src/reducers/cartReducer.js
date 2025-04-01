const initialState = {
    items: [],
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const existingItem = state.items.find(item => item.id === action.payload.id);

            if (existingItem) {
                // If item exists, update quantity
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + (action.payload.quantity || 1) }
                            : item
                    ),
                };
            } else {
                // If item doesn't exist, add new item with quantity
                return {
                    ...state,
                    items: [...state.items, { ...action.payload, quantity: action.payload.quantity || 1 }],
                };
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
        case 'UPDATE_CART_ITEM':
            return {
                ...state,
                items: state.items.map(item =>
                    item.id === action.payload.id
                        ? { ...item, quantity: action.payload.quantity }
                        : item
                ),
            };
        case 'CLEAR_CART':
            return {
                ...state,
                items: [],
            };
        default:
            return state;
    }
};

export default cartReducer; 
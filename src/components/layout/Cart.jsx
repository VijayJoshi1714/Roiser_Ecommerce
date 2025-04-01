import { useSelector } from 'react-redux';

const Cart = ({ onClose }) => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <div className="fixed top-0 right-0 w-1/3 h-full bg-white shadow-lg p-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button onClick={onClose} className="mt-4 text-red-500">Close</button>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                cartItems.map(item => (
                    <div key={item.id} className="flex justify-between items-center mt-2">
                        <div>
                            <h3>{item.title}</h3>
                            <p>${item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default Cart; 
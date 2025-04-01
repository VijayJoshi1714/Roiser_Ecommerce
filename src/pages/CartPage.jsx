import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaShoppingCart, FaTruck, FaCreditCard, FaHeadset } from 'react-icons/fa';
import WOW from 'wowjs';

const CartPage = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);

    useEffect(() => {
        new WOW.WOW({
            live: false
        }).init();
    }, []);

    const handleQuantityChange = (id, quantity) => {
        dispatch({
            type: 'UPDATE_CART_ITEM',
            payload: { id, quantity }
        });
    };

    const handleRemoveItem = (id) => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: { id }
        });
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const calculateFreeShippingProgress = () => {
        const subtotal = calculateSubtotal();
        const freeShippingThreshold = 150;
        const remaining = Math.max(0, freeShippingThreshold - subtotal);
        const progress = (subtotal / freeShippingThreshold) * 100;
        return { remaining, progress: Math.min(100, progress) };
    };

    const { remaining, progress } = calculateFreeShippingProgress();

    return (
        <div className="min-h-screen bg-white animate__animated animate__fadeIn">
            {/* Breadcrumb */}
            <div className="bg-[#FDF1F1] wow animate__animated animate__fadeIn">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <div className="py-16">
                        <h1 className="text-4xl font-bold mb-4">Cart Page</h1>
                        <div className="flex items-center gap-2">
                            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-primary">Cart Page</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-0 max-w-[1170px] py-8">
                {/* Free Shipping Progress */}
                <div className="bg-[#F6F6F7] rounded-lg p-6 mb-8 wow animate__animated animate__fadeInUp" data-wow-delay="0.2s">
                    <p className="text-[14px] text-[#141414] mb-4">
                        {remaining > 0
                            ? `Add $${remaining.toFixed(2)} to cart and get free shipping`
                            : 'Your order qualifies for free shipping!'
                        }
                    </p>
                    <div className="w-full h-[6px] bg-[#EDEDED] rounded-[10px]">
                        <div
                            className="h-[6px] bg-[#E53E3E] rounded-[10px] transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Cart Items Section */}
                    <div className="flex-grow wow animate__animated animate__fadeInUp" data-wow-delay="0.3s">
                        <div className="bg-[#F6F6F7] rounded-lg p-6">
                            {cartItems.length === 0 ? (
                                <div className="text-center py-8">
                                    <p className="text-gray-600 mb-4">Your cart is empty</p>
                                    <Link
                                        to="/shop"
                                        className="inline-block bg-[#E53E3E] text-white px-6 py-2 rounded-md hover:bg-[#d63030] transition"
                                    >
                                        Continue Shopping
                                    </Link>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    {/* Desktop View */}
                                    <table className="w-full hidden md:table">
                                        <thead>
                                            <tr className="border-b border-[#E8E8E8]">
                                                <th className="text-left py-4 text-[14px] text-[#74787C]">PRODUCT</th>
                                                <th className="text-left py-4 text-[14px] text-[#74787C]">PRICE</th>
                                                <th className="text-left py-4 text-[14px] text-[#74787C]">QUANTITY</th>
                                                <th className="text-left py-4 text-[14px] text-[#74787C]">SUBTOTAL</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {cartItems.map((item) => (
                                                <tr key={item.id} className="border-b border-[#E8E8E8]">
                                                    <td className="py-4">
                                                        <div className="flex items-center gap-4">
                                                            <button
                                                                onClick={() => handleRemoveItem(item.id)}
                                                                className="text-[20px] text-[#74787C] hover:text-[#E53E3E]"
                                                            >
                                                                ×
                                                            </button>
                                                            <img
                                                                src={item.image}
                                                                alt={item.name}
                                                                className="w-20 h-20 object-cover rounded"
                                                            />
                                                            <span className="font-medium text-[14px]">{item.name}</span>
                                                        </div>
                                                    </td>
                                                    <td className="py-4">
                                                        <span className="text-[14px] font-semibold">${item.price.toFixed(2)}</span>
                                                    </td>
                                                    <td className="py-4">
                                                        <div className="flex items-center border border-[#E8E8E8] rounded w-[120px] h-[50px]">
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                                                                className="w-[40px] h-full flex items-center justify-center hover:bg-gray-100"
                                                            >
                                                                -
                                                            </button>
                                                            <div className="flex-1 h-full flex items-center justify-center border-x border-[#E8E8E8]">
                                                                {item.quantity}
                                                            </div>
                                                            <button
                                                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                className="w-[40px] h-full flex items-center justify-center hover:bg-gray-100"
                                                            >
                                                                +
                                                            </button>
                                                        </div>
                                                    </td>
                                                    <td className="py-4 font-semibold text-[14px]">
                                                        ${(item.price * item.quantity).toFixed(2)}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>

                                    {/* Mobile View */}
                                    <div className="md:hidden space-y-6">
                                        {cartItems.map((item) => (
                                            <div key={item.id} className="border-b border-[#E8E8E8] pb-6">
                                                <div className="flex items-start gap-4">
                                                    <button
                                                        onClick={() => handleRemoveItem(item.id)}
                                                        className="text-[20px] text-[#74787C] hover:text-[#E53E3E]"
                                                    >
                                                        ×
                                                    </button>
                                                    <img
                                                        src={item.image}
                                                        alt={item.name}
                                                        className="w-20 h-20 object-cover rounded"
                                                    />
                                                    <div className="flex-1">
                                                        <h3 className="font-medium text-[14px] mb-2">{item.name}</h3>
                                                        <div className="space-y-3">
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-[14px] text-[#74787C]">Price:</span>
                                                                <span className="text-[14px] font-semibold">${item.price.toFixed(2)}</span>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-[14px] text-[#74787C]">Quantity:</span>
                                                                <div className="flex items-center border border-[#E8E8E8] rounded w-[120px] h-[40px]">
                                                                    <button
                                                                        onClick={() => handleQuantityChange(item.id, Math.max(1, item.quantity - 1))}
                                                                        className="w-[40px] h-full flex items-center justify-center hover:bg-gray-100"
                                                                    >
                                                                        -
                                                                    </button>
                                                                    <div className="flex-1 h-full flex items-center justify-center border-x border-[#E8E8E8]">
                                                                        {item.quantity}
                                                                    </div>
                                                                    <button
                                                                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                                                        className="w-[40px] h-full flex items-center justify-center hover:bg-gray-100"
                                                                    >
                                                                        +
                                                                    </button>
                                                                </div>
                                                            </div>
                                                            <div className="flex justify-between items-center">
                                                                <span className="text-[14px] text-[#74787C]">Subtotal:</span>
                                                                <span className="text-[14px] font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Coupon Section */}
                            {cartItems.length > 0 && (
                                <div className="mt-6 flex flex-wrap gap-4">
                                    <input
                                        type="text"
                                        placeholder="Coupon code"
                                        className="flex-1 min-w-[200px] px-4 py-3 border border-[#E8E8E8] rounded-md focus:outline-none focus:border-[#E53E3E]"
                                    />
                                    <button className="px-6 py-3 bg-[#E53E3E] text-white rounded-md hover:bg-[#d63030] transition-colors">
                                        Apply Coupon
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Cart Totals Section */}
                    <div className="w-full lg:w-[464px] wow animate__animated animate__fadeInUp" data-wow-delay="0.4s">
                        <div className="bg-[#F6F6F7] rounded-lg p-8">
                            <h2 className="text-[18px] font-bold text-[#141414] mb-8">Cart Totals</h2>

                            {/* Subtotal */}
                            <div className="flex justify-between items-center py-6 border-b border-[#E8E8E8]">
                                <span className="text-[14px] text-[#74787C]">Subtotal</span>
                                <span className="text-[14px] font-semibold text-[#141414]">
                                    ${calculateSubtotal().toFixed(2)}
                                </span>
                            </div>

                            {/* Shipping */}
                            <div className="py-6 border-b border-[#E8E8E8]">
                                <span className="text-[14px] text-[#74787C] block mb-4">Shipping</span>
                                <div className="space-y-4">
                                    <label className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            defaultChecked
                                            className="w-[14px] h-[14px] border-[#141414]"
                                        />
                                        <span className="text-[14px] text-[#141414]">Free Shipping</span>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="w-[14px] h-[14px] border-[#141414]"
                                        />
                                        <span className="text-[14px] text-[#141414]">Flat Rate</span>
                                    </label>
                                    <label className="flex items-center gap-3">
                                        <input
                                            type="radio"
                                            name="shipping"
                                            className="w-[14px] h-[14px] border-[#141414]"
                                        />
                                        <span className="text-[14px] text-[#141414]">Local Pickup</span>
                                    </label>
                                </div>

                                <p className="text-[14px] text-[#74787C] mt-4">
                                    Shipping options will be updated during checkout
                                </p>

                                <button className="text-[14px] text-[#141414] mt-4 hover:text-[#E53E3E]">
                                    Calculate Shipping
                                </button>
                            </div>

                            {/* Total */}
                            <div className="flex justify-between items-center py-6 border-b border-[#E8E8E8]">
                                <span className="text-[14px] text-[#74787C]">Total</span>
                                <span className="text-[14px] font-semibold text-[#141414]">
                                    ${calculateSubtotal().toFixed(2)}
                                </span>
                            </div>

                            {/* Checkout Button */}
                            <Link to="/checkout">
                                <button className="w-full cursor-pointer bg-[#E53E3E] text-white py-4 rounded-[6px] text-[14px] font-bold uppercase mt-6 hover:bg-[#d63030] transition-colors">
                                    Proceed to Checkout
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <FaTruck className="text-primary text-xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Free Shipping</h3>
                            <p className="text-sm text-gray-600">Orders over $65</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <FaShoppingCart className="text-primary text-xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Free Returns</h3>
                            <p className="text-sm text-gray-600">Within 30 days</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <FaCreditCard className="text-primary text-xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold">Secure Payments</h3>
                            <p className="text-sm text-gray-600">100% Protected</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                            <FaHeadset className="text-primary text-xl" />
                        </div>
                        <div>
                            <h3 className="font-semibold">24/7 Support</h3>
                            <p className="text-sm text-gray-600">Ready to help</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage; 
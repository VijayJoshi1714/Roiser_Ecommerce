import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

const CheckoutPage = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState('bank');

    const cartItems = useSelector((state) => state.cart.items);

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    };

    const shippingCost = 50.00;
    const total = calculateSubtotal() + shippingCost;

    const handlePayment = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Simulate payment processing
            await new Promise(resolve => setTimeout(resolve, 2000));

            // Simulate successful payment
            dispatch({ type: 'CLEAR_CART' }); // Clear the cart after successful payment

            // Navigate to success page
            navigate('/payment-success');

        } catch (error) {
            console.error('Payment failed:', error);
            alert('Payment failed. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Breadcrumb */}
            <div className="bg-[#FDF1F1] relative overflow-hidden">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <div className="py-16">
                        <h1 className="text-4xl font-bold mb-4">Checkout</h1>
                        <div className="flex items-center gap-2">
                            <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
                            <span className="text-gray-400">/</span>
                            <span className="text-primary">Checkout</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 lg:px-0 max-w-[1170px] py-8">
                {/* Login and Coupon Links */}
                <div className="space-y-4 mb-8">
                    <div className="bg-[#E53E3E] p-4 rounded">
                        <p className='text-[#ffffff]'>Returning customer? <button className="text-[#ffffff] hover:underline">Click here to login</button></p>
                    </div>
                    <div className="bg-[#F6F6F7] p-4 rounded">
                        <p>Have a coupon? <button className="text-[#E53E3E] hover:underline">Click here to enter your code</button></p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Billing Details */}
                    <div className="flex-grow">
                        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm mb-2">Email Address*</label>
                                <input type="email" className="w-full p-3 border border-[#E8E8E8] rounded" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm mb-2">First Name*</label>
                                    <input type="text" className="w-full p-3 border border-[#E8E8E8] rounded" required />
                                </div>
                                <div>
                                    <label className="block text-sm mb-2">Last Name*</label>
                                    <input type="text" className="w-full p-3 border border-[#E8E8E8] rounded" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Company Name (Optional)</label>
                                <input type="text" className="w-full p-3 border border-[#E8E8E8] rounded" />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Country / Region*</label>
                                <select className="w-full p-3 border border-[#E8E8E8] rounded" required>
                                    <option value="US">India</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Street Address*</label>
                                <input
                                    type="text"
                                    placeholder="House number and street name"
                                    className="w-full p-3 border border-[#E8E8E8] rounded mb-4"
                                    required
                                />
                                <input
                                    type="text"
                                    placeholder="Apartment, suite, unit, etc. (optional)"
                                    className="w-full p-3 border border-[#E8E8E8] rounded"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Town / City*</label>
                                <input type="text" className="w-full p-3 border border-[#E8E8E8] rounded" required />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">State*</label>
                                <select className="w-full p-3 border border-[#E8E8E8] rounded" required>
                                    <option value="CA">Maharashtra</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm mb-2">ZIP Code*</label>
                                <input type="text" className="w-full p-3 border border-[#E8E8E8] rounded" required />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Phone*</label>
                                <input type="tel" className="w-full p-3 border border-[#E8E8E8] rounded" required />
                            </div>
                            <div>
                                <label className="block text-sm mb-2">Order Notes (Optional)</label>
                                <textarea
                                    className="w-full p-3 border border-[#E8E8E8] rounded"
                                    rows="4"
                                    placeholder="Notes about your order, e.g. special notes for delivery"
                                ></textarea>
                            </div>
                        </form>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:w-[400px]">
                        <div className="bg-[#F6F6F7] p-6 rounded">
                            <h2 className="text-2xl font-bold mb-6">Your Order</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between pb-4 border-b border-[#E8E8E8]">
                                    <span className="font-medium">PRODUCTS</span>
                                    <span className="font-medium">PRICE</span>
                                </div>
                                {cartItems.map((item) => (
                                    <div key={item.id} className="flex justify-between pb-4 border-b border-[#E8E8E8]">
                                        <span>{item.title}</span>
                                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                                    </div>
                                ))}
                                <div className="flex justify-between pb-4 border-b border-[#E8E8E8]">
                                    <span>Subtotal</span>
                                    <span>${calculateSubtotal().toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-[#E8E8E8]">
                                    <span>Shipping</span>
                                    <span>Flat rate: ${shippingCost.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between pb-4 border-b border-[#E8E8E8]">
                                    <span className="font-bold">Total Price:</span>
                                    <span className="text-[#E53E3E] font-bold">${total.toFixed(2)}</span>
                                </div>

                                {/* Payment Methods */}
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="bank"
                                            checked={paymentMethod === 'bank'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span>Direct Bank Transfer</span>
                                    </label>
                                    <label className="flex items-center gap-2">
                                        <input
                                            type="radio"
                                            name="payment"
                                            value="card"
                                            checked={paymentMethod === 'card'}
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span>Credit/Debit Card</span>
                                    </label>

                                    {/* Card Payment Form - Show only when card payment is selected */}
                                    {paymentMethod === 'card' && (
                                        <div className="mt-4 space-y-4">
                                            <div>
                                                <label className="block text-sm mb-2">Card Number*</label>
                                                <input
                                                    type="text"
                                                    placeholder="1234 5678 9012 3456"
                                                    className="w-full p-3 border rounded"
                                                    maxLength="16"
                                                />
                                            </div>
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <label className="block text-sm mb-2">Expiry Date*</label>
                                                    <input
                                                        type="text"
                                                        placeholder="MM/YY"
                                                        className="w-full p-3 border rounded"
                                                        maxLength="5"
                                                    />
                                                </div>
                                                <div>
                                                    <label className="block text-sm mb-2">CVV*</label>
                                                    <input
                                                        type="text"
                                                        placeholder="123"
                                                        className="w-full p-3 border rounded"
                                                        maxLength="3"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={handlePayment}
                                        disabled={loading}
                                        className="w-full bg-[#E53E3E] text-white py-4 rounded mt-6 hover:bg-[#d63030] transition-colors disabled:bg-gray-400"
                                    >
                                        {loading ? 'Processing...' : 'PLACE ORDER'}
                                    </button>
                                </div>

                                <p className="text-sm text-gray-600 mt-4">
                                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy.
                                </p>

                                <label className="flex items-center gap-2 mt-4">
                                    <input type="checkbox" required />
                                    <span className="text-sm">I have read and agree terms and conditions*</span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage; 
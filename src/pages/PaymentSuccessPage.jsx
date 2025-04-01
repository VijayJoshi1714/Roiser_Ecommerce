import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle } from 'react-icons/fa';

const PaymentSuccessPage = () => {
    return (
        <div className="min-h-screen bg-white flex items-center justify-center">
            <div className="text-center p-8">
                <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-6" />
                <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
                <p className="text-gray-600 mb-8">
                    Thank you for your purchase. Your order has been confirmed.
                </p>
                <div className="space-x-4">
                    <Link
                        to="/shop"
                        className="bg-[#E53E3E] text-white px-6 py-3 rounded hover:bg-[#d63030] transition-colors"
                    >
                        Continue Shopping
                    </Link>
                    <Link
                        to="/orders"
                        className="border border-[#E53E3E] text-[#E53E3E] px-6 py-3 rounded hover:bg-[#FDF1F1] transition-colors"
                    >
                        View Orders
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccessPage; 
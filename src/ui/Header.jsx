import { Link } from 'react-router-dom';
import { FaBars, FaSearch } from 'react-icons/fa';
import logo from '../../public/lightlogo.png';
import { useState } from 'react';
import FaPhone from '../../public/assets/phone.png';
import FaShoppingCart from '../../public/assets/cart.png';
import FaHeart from '../../public/assets/favourites.png';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const cartItems = useSelector(state => state.cart.items);

    return (
        <header className="sticky top-0 bg-white z-40 shadow-sm ">
            {/* Top Bar - Desktop Only */}
            <div className="bg-[#E53E3E] hidden md:block">
                <div className="w-[1170px] mx-auto flex justify-between py-2.5">
                    {/* Left Links */}
                    <div className="flex gap-4 text-sm text-white">
                        <Link to="/">About</Link>
                        <Link to="/">My Account</Link>
                        <Link to="/">Wishlist</Link>
                        <Link to="/">Checkout</Link>
                    </div>

                    {/* Center Text */}
                    <div className="text-sm text-white">
                        Free shipping for all orders of 150$
                    </div>

                    {/* Right Options */}
                    <div className="flex gap-4 text-sm text-white">
                        <Link to="/">Store Location</Link>
                        <div className="flex items-center gap-4">
                            <select className="bg-transparent border-none text-white text-sm">
                                <option value="en">English</option>
                            </select>
                            <select className="bg-transparent border-none text-white text-sm">
                                <option value="usd">USD</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <div className="w-full md:w-[1170px] mx-auto py-4 md:py-6 px-4 md:px-0">
                {/* Mobile Header */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="text-2xl"
                    >
                        <FaBars />
                    </button>
                    <img src={logo} alt="logo" className="h-8" />
                    <div className="flex items-center gap-4 ml-auto">
                        <Link to="/cart">
                            <img src={FaShoppingCart} alt="" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Search - Separate Row */}
                <div className="mt-4 md:hidden">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full h-[45px] pl-4 pr-12 border border-[#E4E5EE] rounded-[3px]"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2">
                            <FaSearch className="text-[#74787C]" />
                        </button>
                    </div>
                </div>

                {/* Desktop Header */}
                <div className="hidden md:flex items-center justify-between">
                    <Link to="/" onClick={() => { window.scrollTo(0, 0); }}>
                        <img src={logo} alt="logo" />
                    </Link>
                    <div className="w-[500px] relative">
                        <input
                            type="text"
                            placeholder="Search for products..."
                            className="w-full h-[45px] pl-4 pr-12 border border-[#E4E5EE] rounded-[3px]"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2">
                            <FaSearch className="text-[#74787C]" />
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        {/* Phone */}
                        <div className="flex items-center gap-3">
                            <div className="w-[45px] h-[45px] bg-[#F5F6F2] flex items-center justify-center rounded-full">
                                <img src={FaPhone} alt="" className='rounded-full' />
                            </div>
                            <div>
                                <p className="text-sm text-[#74787C]">Call Us Now:</p>
                                <p className="font-semibold">+(258) 2159-2159</p>
                            </div>
                        </div>

                        {/* Wishlist */}
                        <div className="w-[45px] h-[45px] bg-[#F5F6F2] flex items-center justify-center rounded-full">
                            <img src={FaHeart} alt="" />
                        </div>

                        {/* Cart */}
                        <Link to="/cart" className="flex items-center gap-3">
                            <div className="relative w-[45px] h-[45px] bg-[#F5F6F2] flex items-center justify-center rounded-full">
                                <img src={FaShoppingCart} alt="" />
                                <span className="absolute -top-1 -right-1 w-[15px] h-[15px] bg-[#E53E3E] text-white text-[10px] flex items-center justify-center rounded-full">
                                    {cartItems.length}
                                </span>
                            </div>
                            <div>
                                <p className="text-sm text-[#74787C]">Your cart,</p>
                                <p className="font-semibold">${cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Navigation - Desktop Only */}
            <nav className="hidden md:flex justify-center mt-4">
                <div className="relative flex h-[50px] w-[1170px] rounded-[6px]">
                    {/* Black Navigation Section */}
                    <div className="flex h-full w-[900px] bg-[#1A1A1A] rounded-l-[6px]">
                        <div className="flex gap-6 text-sm uppercase text-white h-full items-center px-8">
                            <Link to="/">Home</Link>
                            <Link to="/">Shop</Link>
                            <Link to="/">Women</Link>
                            <Link to="/">Men</Link>
                            <Link to="/">Pages</Link>
                            <Link to="/">Blog</Link>
                            <Link to="/">Contact</Link>
                        </div>
                    </div>

                    {/* Red Sale Section */}
                    <div className="flex items-center gap-2 bg-[#E53E3E] h-full w-[270px] rounded-r-[6px]">
                        <span className="text-sm text-white ml-4">Get 30% Discount Now</span>
                        <span className="bg-white text-[#E53E3E] text-xs font-bold px-3 py-1 rounded-full">
                            SALE
                        </span>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`md:hidden fixed inset-0 bg-black/50 z-50 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            >
                <div
                    className={`bg-white w-[280px] h-full transition-all duration-300 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    onClick={(e) => e.stopPropagation()}
                >
                    <div className="p-4 border-b">
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-medium">Menu</h2>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-2xl"
                            >
                                &times;
                            </button>
                        </div>
                    </div>
                    <div className="p-4">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={FaPhone} className='rounded-full' alt="" />
                            <div>
                                <p className="text-sm text-[#74787C]">Call Us 24/7</p>
                                <p className="text-[#E53E3E] font-semibold">+258 3692 2569</p>
                            </div>
                        </div>
                        <ul className="space-y-4">
                            <li><Link to="/" className="block py-2">Home</Link></li>
                            <li><Link to="/" className="block py-2">Shop</Link></li>
                            <li><Link to="/" className="block py-2">Women</Link></li>
                            <li><Link to="/" className="block py-2">Men</Link></li>
                            <li><Link to="/" className="block py-2">Pages</Link></li>
                            <li><Link to="/" className="block py-2">Blog</Link></li>
                            <li><Link to="/" className="block py-2">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
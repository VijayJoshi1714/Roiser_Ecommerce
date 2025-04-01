import phone from '../../public/assets/footer/telephone.png';
import payment from '../../public/assets/footer/payids.png';
import shipping from '../../public/assets/footer/shippingicon.png';
import returns from '../../public/assets/footer/returnsicon.png';
import secured from '../../public/assets/footer/securedpayicon.png';
import service from '../../public/assets/footer/custserviceicon.png';
import { FaPhone } from 'react-icons/fa';


const Footer = () => {
    return (
        <footer className="w-full bg-[#F6F6F7] pt-8 md:pt-12 pb-20 md:pb-8">
            {/* Info Bar */}
            <div className="flex justify-center px-4 lg:px-0">
                <div className="w-full max-w-[1170px] bg-white rounded-[6px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 p-6 md:p-8">
                        {/* Free Shipping */}
                        <div className="flex items-center gap-4">
                            <img src={shipping} alt="shipping" />
                            <div>
                                <p className="font-semibold text-lg text-[#1A1A1A]">Free shipping</p>
                                <p className="text-sm text-[#74787C] whitespace-nowrap">Free shipping on orders over $65.</p>
                            </div>
                        </div>

                        {/* Free Returns */}
                        <div className="flex items-center gap-4">
                            <img src={returns} alt="returns" />
                            <div>
                                <p className="font-semibold text-lg text-[#1A1A1A]">Free Returns</p>
                                <p className="text-sm text-[#74787C]">30-days free return policy</p>
                            </div>
                        </div>

                        {/* Secured Payments */}
                        <div className="flex items-center gap-4">
                            <img src={secured} alt="payments" />
                            <div>
                                <p className="font-semibold text-lg text-[#1A1A1A]">Secured Payments</p>
                                <p className="text-sm text-[#74787C]">We accept all major credit cards</p>
                            </div>
                        </div>

                        {/* Customer Service */}
                        <div className="flex items-center gap-4">
                            <img src={service} alt="service" />
                            <div>
                                <p className="font-semibold text-lg text-[#1A1A1A]">Customer Service</p>
                                <p className="text-sm text-[#74787C]">Top notch customer service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="flex justify-center px-4 lg:px-0 mt-12 md:mt-20">
                <div className="w-full max-w-[1170px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-0">
                        {/* About Store */}
                        <div className="text-center sm:text-left">
                            <h4 className="text-lg font-medium text-[#1A1A1A] mb-6">About Store</h4>
                            <div className="mb-8">
                                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                                    <div className="w-[50px] h-[50px] bg-white rounded-full flex items-center justify-center">
                                        <FaPhone className="text-[#E53E3E] text-lg" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-[#74787C]">Have Question? Call Us 24/7</p>
                                        <p className="text-xl font-semibold text-[#E53E3E]">+258 3692 2569</p>
                                    </div>
                                </div>
                                <div className="text-[#74787C] space-y-3 mt-6">
                                    <p>Monday - Friday: 8:00am - 6:00pm</p>
                                    <p>Saturday: 8:00am - 6:00pm</p>
                                    <p>Sunday: Service Close</p>
                                </div>
                            </div>
                        </div>

                        {/* Our Stores */}
                        <div>
                            <h4 className="text-lg font-medium text-[#1A1A1A] mb-8">Our Stores</h4>
                            <ul className="text-[#74787C] space-y-4">
                                <li>New York</li>
                                <li>London SF</li>
                                <li>Los Angeles</li>
                                <li>Chicago</li>
                                <li>Las Vegas</li>
                            </ul>
                        </div>

                        {/* Shop Categories */}
                        <div>
                            <h4 className="text-lg font-medium text-[#1A1A1A] mb-8">Shop Categories</h4>
                            <ul className="text-[#74787C] space-y-4">
                                <li>New Arrivals</li>
                                <li>Best Selling</li>
                                <li>Vegetables</li>
                                <li>Fresh Meat</li>
                                <li>Fresh Seafoods</li>
                            </ul>
                        </div>

                        {/* Useful Links */}
                        <div>
                            <h4 className="text-lg font-medium text-[#1A1A1A] mb-8">Useful Links</h4>
                            <ul className="text-[#74787C] space-y-4">
                                <li>Privacy Policy</li>
                                <li>Terms & Conditions</li>
                                <li>Contact Us</li>
                                <li>Latest News</li>
                                <li>Our Sitemaps</li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <h4 className="text-lg font-medium text-[#1A1A1A] mb-6">Our Newsletter</h4>
                            <p className="text-sm text-[#74787C] mb-4">
                                Subscribe to the mailing list to receive updates one the new arrivals
                            </p>
                            <div className="flex flex-col sm:flex-row gap-2 mb-4">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="w-full lg:w-[300px] h-[50px] px-4 border border-[#E4E5EE] rounded-[3px]"
                                />
                                <button className="w-full sm:w-auto bg-[#E53E3E] text-white px-8 h-[50px] rounded-[3px] text-xs font-bold whitespace-nowrap">
                                    SUBSCRIBE
                                </button>
                            </div>
                            <label className="flex items-center gap-2 text-sm text-[#74787C]">
                                <input type="checkbox" />
                                <span>I would like to receive news and special offer</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex justify-center px-4 lg:px-0 mt-12 md:mt-20">
                <div className="w-full max-w-[1170px] border-t border-[#DDDDDE] pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex flex-col md:flex-row items-center gap-4">
                            <span className="text-sm">Payment System:</span>
                            <img src={payment} alt="payment methods" className="h-[45px]" />
                        </div>
                        <p className="text-sm text-center">Copyright 2024 ©Roiser. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
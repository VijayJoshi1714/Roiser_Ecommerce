import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import specialOffer from '../../public/assets/specialoffer.png';
import fashion from '../../public/assets/fashion.png';
import mens from '../../public/assets/mens.jpg';
import womens from '../../public/assets/womens.jpeg';
import accessories from '../../public/assets/accessories.jpeg';
import footwear from '../../public/assets/footwear.jpg';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <div className="bg-[#FDF1F1] py-16">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-6">
                            <h1 className="text-5xl font-bold leading-tight">
                                Discover Your Perfect Style
                            </h1>
                            <p className="text-gray-600 text-lg">
                                Shop the latest trends in fashion with our curated collection of clothing and accessories.
                            </p>
                            <Link
                                to="/shop"
                                onClick={() => { window.scrollTo(0, 0); }}
                                className="inline-flex items-center gap-2 bg-[#E53E3E] text-white px-8 py-4 rounded-md hover:bg-[#d63636] transition-colors"
                            >
                                Shop Now
                                <FaArrowRight />
                            </Link>
                        </div>
                        <div className="relative">
                            <img
                                src={fashion}
                                alt="Fashion Collection"
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Categories */}
            <div className="py-16">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <h2 className="text-3xl font-bold text-center mb-12">Featured Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { name: 'Womens', image: womens },
                            { name: 'Mens', image: mens },
                            { name: 'Accessories', image: accessories },
                            { name: 'Footwear', image: footwear }
                        ].map((category) => (
                            <Link
                                key={category.name}
                                to="/shop"
                                onClick={() => { window.scrollTo(0, 0); }}
                                className="group relative overflow-hidden rounded-lg aspect-square"
                            >
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                                    <h3 className="text-white text-2xl font-semibold">{category.name}</h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Featured Products */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <div className="flex justify-between items-center mb-12">
                        <h2 className="text-3xl font-bold">Featured Products</h2>
                        <Link
                            to="/shop"
                            className="text-[#E53E3E] hover:text-[#d63636] flex items-center gap-2"
                        >
                            View All
                            <FaArrowRight />
                        </Link>
                    </div>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    </div>
                </div>
            </div>

            {/* Special Offer */}
            <div className="py-16">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <div className="bg-[#FDF1F1] rounded-2xl p-12 flex flex-col md:flex-row items-center justify-between">
                        <div className="space-y-4 text-center md:text-left mb-6 md:mb-0">
                            <h2 className="text-3xl font-bold">Special Offer</h2>
                            <p className="text-gray-600">Get 30% off on selected items</p>
                            <Link
                                to="/shop"
                                onClick={() => { window.scrollTo(0, 0); }}
                                className="inline-flex items-center gap-2 bg-[#E53E3E] text-white px-8 py-4 rounded-md hover:bg-[#d63636] transition-colors"
                            >
                                Shop Now
                                <FaArrowRight />
                            </Link>
                        </div>
                        <img
                            src={specialOffer}
                            alt="Special Offer"
                            className="w-full md:w-1/4 rounded-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                    <div className="text-center max-w-2xl mx-auto space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold">Subscribe to Our Newsletter</h2>
                        <p className="text-gray-600">Stay updated with our latest products and special offers</p>
                        <div className="block sm:flex sm:gap-2 mt-6">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full mb-2 sm:mb-0 h-[50px] px-4 border border-gray-200 rounded-md"
                            />
                            <button className="w-full sm:w-[140px] h-[50px] bg-[#E53E3E] text-white rounded-md hover:bg-[#d63636] transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
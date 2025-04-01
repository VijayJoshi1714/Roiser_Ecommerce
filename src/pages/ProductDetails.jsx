import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProductDetails = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [quantity, setQuantity] = useState(1);
    const [showZoom, setShowZoom] = useState(false);
    const [activeTab, setActiveTab] = useState('description');

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://fakestoreapi.com/products/${id}`);
                if (!response.ok) throw new Error('Product not found');
                const data = await response.json();
                setProduct(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    // Demo images array (using the same image multiple times for demo)
    const images = [
        product?.image,
        product?.image,
        product?.image,
        product?.image
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    const handleQuantityChange = (type) => {
        if (type === 'decrease' && quantity > 1) {
            setQuantity(prev => prev - 1);
        } else if (type === 'increase') {
            setQuantity(prev => prev + 1);
        }
    };

    const handleAddToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                id: product.id,
                title: product.title,
                price: product.price,
                image: product.image,
                quantity: quantity,
            },
        });
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#E53E3E] border-t-transparent"></div>
        </div>
    );

    if (error) return (
        <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-red-500">Error: {error}</p>
        </div>
    );

    if (!product) return null;

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                    {/* Main Image with Navigation */}
                    <div className="relative bg-white rounded-lg p-4 sm:p-8">
                        <button
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
                        >
                            <FaArrowLeft />
                        </button>
                        <img
                            src={images[currentImageIndex]}
                            alt={product?.title}
                            className="w-full h-[400px] object-contain cursor-zoom-in"
                            onClick={() => setShowZoom(true)}
                        />
                        <button
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-gray-100"
                        >
                            <FaArrowRight />
                        </button>
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                            <span className="bg-gray-800/60 text-white px-2 py-1 rounded-full text-sm">
                                {currentImageIndex + 1} / {images.length}
                            </span>
                        </div>
                    </div>

                    {/* Thumbnail Images */}
                    <div className="flex gap-2 sm:gap-4 overflow-x-auto">
                        {images.map((img, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentImageIndex(index)}
                                className={`w-20 h-20 border rounded-lg p-2 ${currentImageIndex === index ? 'border-[#E53E3E]' : 'border-gray-200'
                                    }`}
                            >
                                <img
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                            </button>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-4">
                    <span className="text-[#E53E3E] text-sm">MODERN DRESS</span>
                    <h1 className="text-2xl font-semibold text-gray-800">
                        {product?.title}
                    </h1>
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400" />
                        ))}
                        <span className="text-sm text-gray-500 ml-1">(1 customer review)</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold text-[#E53E3E]">
                            ${product?.price?.toFixed(2)}
                        </span>
                    </div>
                    <p className="text-gray-600">
                        Erat felis odio cum habitant sagittis conubia turpis pharetra, ante porttitoret donec duis primis nam facilisis augue malesuada venenatis.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        28 people are viewing this right now
                    </div>
                    <div className="text-[#E53E3E]">
                        Only 15 items left in stock!
                    </div>

                    {/* Quantity and Add to Cart */}
                    <div className="space-y-4">
                        {/* First row: Quantity and Add to Cart in one line */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                            <div className="flex items-center border border-[#E8E8E8] rounded-md w-full sm:w-auto">
                                <button
                                    onClick={() => handleQuantityChange('decrease')}
                                    className="px-4 py-2 border-r border-[#E8E8E8] w-full sm:w-auto cursor-pointer"
                                >
                                    -
                                </button>
                                <span className="px-4 py-2 border-x border-[#E8E8E8] flex-1 text-center">{quantity}</span>
                                <button
                                    onClick={() => handleQuantityChange('increase')}
                                    className="px-4 py-2 w-full sm:w-auto cursor-pointer"
                                >
                                    +
                                </button>
                            </div>
                            <button onClick={handleAddToCart} className="bg-[#ffffff] cursor-pointer text-black border border-[#E53E3E] px-8 py-3 lg:w-[360px] rounded-sm hover:bg-[#d63636] hover:text-white transition-colors">
                                Add to Cart
                            </button>
                        </div>

                        {/* Second row: Buy Now button full width */}
                        <button className="w-full lg:w-[500px] bg-[#E53E3E] text-white px-8 py-3 rounded-sm hover:bg-[#d63636] transition-colors">
                            Buy Item Now
                        </button>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-2 pt-4">
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4">✓</span>
                            Free returns
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4">✓</span>
                            Free shipping via DHL, fully insured
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-4 h-4">✓</span>
                            All taxes and customs duties included
                        </div>
                    </div>
                </div>
            </div>

            {/* Tabs Section */}
            <div className="mt-16">
                {/* Tab Headers */}
                <div className="flex flex-wrap border-b border-gray-200">
                    <button
                        onClick={() => setActiveTab('description')}
                        className={`px-4 sm:px-8 py-4 font-medium ${activeTab === 'description'
                            ? 'text-[#E53E3E] border-b-2 border-[#E53E3E]'
                            : 'text-gray-500'
                            }`}
                    >
                        Description
                    </button>
                    <button
                        onClick={() => setActiveTab('additional')}
                        className={`px-4 sm:px-8 py-4 font-medium ${activeTab === 'additional'
                            ? 'text-[#E53E3E] border-b-2 border-[#E53E3E]'
                            : 'text-gray-500'
                            }`}
                    >
                        Additional information
                    </button>
                    <button
                        onClick={() => setActiveTab('reviews')}
                        className={`px-4 sm:px-8 py-4 font-medium ${activeTab === 'reviews'
                            ? 'text-[#E53E3E] border-b-2 border-[#E53E3E]'
                            : 'text-gray-500'
                            }`}
                    >
                        Reviews (2)
                    </button>
                </div>

                {/* Tab Content */}
                <div className="py-8">
                    {activeTab === 'description' && (
                        <div className="space-y-4">
                            <p className="text-gray-600">
                                {product.description}
                            </p>
                            <p className="text-gray-600">
                                Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Lorem ipsum dolor sit
                                amet, consectetur adipiscing elit. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
                            </p>
                            <div className="aspect-video bg-gray-100 rounded-lg mt-4">
                                {/* Video placeholder */}
                                <div className="w-full h-full flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-grey/80 flex items-center justify-center">
                                        <span className="text-3xl">▶</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'additional' && (
                        <div className="space-y-4">
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-4 w-1/4 font-medium">Weight</td>
                                        <td className="py-4 text-gray-600">0.3 kg</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 w-1/4 font-medium">Dimensions</td>
                                        <td className="py-4 text-gray-600">15 × 10 × 1 cm</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 w-1/4 font-medium">Materials</td>
                                        <td className="py-4 text-gray-600">60% cotton, 40% polyester</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="py-4 w-1/4 font-medium">Color</td>
                                        <td className="py-4 text-gray-600">Blue, White, Black, Grey</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    )}

                    {activeTab === 'reviews' && (
                        <div className="space-y-8">
                            {/* Review Item */}
                            <div className="border-b pb-8">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                                    <div>
                                        <h4 className="font-medium">Nakli</h4>
                                        <div className="flex items-center gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <FaStar key={i} className="text-yellow-400 text-sm" />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600">
                                    Great product! The quality is excellent and it looks exactly as pictured.
                                    Would definitely recommend to others.
                                </p>
                            </div>

                            {/* Add Review Form */}
                            <div>
                                <h3 className="text-xl font-medium mb-4">Add a review</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block mb-2">Your Rating</label>
                                        <div className="flex gap-1">
                                            {[...Array(5)].map((_, i) => (
                                                <button key={i} type="button">
                                                    <FaStar className="text-gray-300 hover:text-yellow-400" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block mb-2">Your Review</label>
                                        <textarea
                                            className="w-full border rounded-md p-2 h-32"
                                            placeholder="Write your review here..."
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-[#E53E3E] text-white px-8 py-3 rounded-sm hover:bg-[#d63636] transition-colors"
                                    >
                                        Submit Review
                                    </button>
                                </form>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Image Zoom Modal */}
            {showZoom && (
                <div
                    className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
                    onClick={() => setShowZoom(false)}
                >
                    <img
                        src={images[currentImageIndex]}
                        alt={product?.title}
                        className="max-h-[90vh] max-w-[90vw] object-contain"
                    />
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
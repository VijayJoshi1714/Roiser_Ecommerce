import { FaStar, FaHeart, FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { id, title, description, image, price } = product;

    return (
        <Link to={`/product/${id}`} className="group">
            <div onClick={window.scrollTo(0, 0)} className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow relative">
                {/* Action Buttons */}
                <div className="absolute right-6 top-6 flex flex-col gap-2">
                    <button
                        className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#E53E3E] hover:text-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                        }}
                    >
                        <FaHeart className="text-sm" />
                    </button>
                    <button
                        className="w-8 h-8 bg-white rounded-full shadow-md flex items-center justify-center hover:bg-[#E53E3E] hover:text-white transition-colors"
                        onClick={(e) => {
                            e.preventDefault();
                            // Add to cart logic here
                        }}
                    >
                        <FaShoppingCart className="text-sm" />
                    </button>
                </div>

                {/* Product Image */}
                <div className="relative aspect-square mb-4">
                    <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                    <h3 className="font-medium text-gray-800 group-hover:text-[#E53E3E] transition-colors line-clamp-1">
                        {title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {description}
                    </p>
                    <div className="flex gap-1">
                        {[...Array(5)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-400" />
                        ))}
                    </div>
                    <p className="text-lg font-semibold text-[#E53E3E]">
                        ${price.toFixed(2)}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
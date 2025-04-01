import { useState, useEffect } from 'react';
import ProductCard from '../components/layout/ProductCard';
import { FaThLarge, FaList, FaFilter } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [showFilters, setShowFilters] = useState(false);
    const [sortType, setSortType] = useState('default');

    // Fetch products
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setFilteredProducts(data);
            });
    }, []);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        if (category === 'all') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter(product => product.category === category);
            setFilteredProducts(filtered);
        }
    };

    const handleSort = (e) => {
        const type = e.target.value;
        setSortType(type);

        let sortedProducts = [...filteredProducts];

        switch (type) {
            case 'low-to-high':
                sortedProducts.sort((a, b) => a.price - b.price);
                break;
            case 'high-to-low':
                sortedProducts.sort((a, b) => b.price - a.price);
                break;
            default:
                sortedProducts = [...filteredProducts];
        }

        setFilteredProducts(sortedProducts);
    };

    return (
        <>
            <Breadcrumb title="Shop" /><br />
            <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                {/* Top Controls */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8">
                    <div className="flex justify-between w-full sm:w-auto items-center">
                        <div className="flex gap-2 items-center">
                            <button className="p-2 hover:text-[#E53E3E]">
                                <FaThLarge />
                            </button>
                            <button className="p-2 hover:text-[#E53E3E]">
                                <FaList />
                            </button>
                            <span className="text-sm text-gray-500">
                                Showing {filteredProducts.length} results
                            </span>
                        </div>

                        {/* Filter Toggle Button for Mobile */}
                        <button
                            className="lg:hidden flex items-center gap-2 px-4 py-2"
                            onClick={() => setShowFilters(!showFilters)}
                        >
                            <FaFilter />
                            <span>Filters</span>
                        </button>
                    </div>
                    <div className="w-full sm:w-auto">
                        <select
                            className="w-full sm:w-auto border p-2 rounded-md"
                            value={sortType}
                            onChange={handleSort}
                        >
                            <option value="default">Default Sorting</option>
                            <option value="low-to-high">Price: Low to High</option>
                            <option value="high-to-low">Price: High to Low</option>
                        </select>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex flex-col lg:flex-row-reverse gap-8">
                    {/* Filters Section - Smooth height transition */}
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out
                        ${showFilters ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0 lg:max-h-full lg:opacity-100'}
                        lg:w-[280px] lg:shrink-0`}
                    >
                        {/* Categories */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Categories</h3>
                            <ul className="space-y-3">
                                <li
                                    className={`cursor-pointer hover:text-[#E53E3E] ${selectedCategory === 'all' ? 'text-[#E53E3E]' : ''}`}
                                    onClick={() => handleCategoryClick('all')}
                                >
                                    All Categories
                                </li>
                                <li
                                    className={`cursor-pointer hover:text-[#E53E3E] ${selectedCategory === "men's clothing" ? 'text-[#E53E3E]' : ''}`}
                                    onClick={() => handleCategoryClick("men's clothing")}
                                >
                                    Men's Clothing
                                </li>
                                <li
                                    className={`cursor-pointer hover:text-[#E53E3E] ${selectedCategory === "women's clothing" ? 'text-[#E53E3E]' : ''}`}
                                    onClick={() => handleCategoryClick("women's clothing")}
                                >
                                    Women's Clothing
                                </li>
                                <li
                                    className={`cursor-pointer hover:text-[#E53E3E] ${selectedCategory === 'jewelery' ? 'text-[#E53E3E]' : ''}`}
                                    onClick={() => handleCategoryClick('jewelery')}
                                >
                                    Jewelry
                                </li>
                                <li
                                    className={`cursor-pointer hover:text-[#E53E3E] ${selectedCategory === 'electronics' ? 'text-[#E53E3E]' : ''}`}
                                    onClick={() => handleCategoryClick('electronics')}
                                >
                                    Electronics
                                </li>
                            </ul>
                        </div>

                        {/* Price Filter */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Filter by price</h3>
                            <div className="space-y-4">
                                <div className="h-2 bg-gray-200 rounded-full">
                                    <div className="h-full w-3/4 bg-[#E53E3E] rounded-full"></div>
                                </div>
                                <div className="flex justify-between">
                                    <span>Price: $10 — $90</span>
                                    <button className="text-sm text-[#E53E3E]">Filter</button>
                                </div>
                            </div>
                        </div>

                        {/* Size Filter */}
                        <div className="mb-8">
                            <h3 className="text-lg font-medium mb-4">Item Size</h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-3">
                                <li className="flex justify-between items-center">
                                    <span>XS</span>
                                    <span className="text-gray-500">(13)</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>S</span>
                                    <span className="text-gray-500">(12)</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>M</span>
                                    <span className="text-gray-500">(15)</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>L</span>
                                    <span className="text-gray-500">(18)</span>
                                </li>
                            </ul>
                        </div>

                        {/* Brands */}
                        <div>
                            <h3 className="text-lg font-medium mb-4">Brands</h3>
                            <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-1 gap-3">
                                <li className="flex justify-between items-center">
                                    <span>Juline</span>
                                    <span className="text-gray-500">(29)</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>H&M</span>
                                    <span className="text-gray-500">(26)</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>MAQs</span>
                                    <span className="text-gray-500">(25)</span>
                                </li>
                                <li className="flex justify-between items-center">
                                    <span>Harmoni</span>
                                    <span className="text-gray-500">(12)</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {filteredProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;
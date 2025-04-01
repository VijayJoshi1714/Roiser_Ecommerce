import { Link } from 'react-router-dom';

const Breadcrumb = ({ title }) => {
    return (
        <div className="bg-[#FDF1F1] relative overflow-hidden">
            {/* Large Circle Background */}
            <div className="absolute -right-40 -top-40 w-[500px] h-[500px] rounded-full border-2 border-[#E53E3E] opacity-10" />

            <div className="container mx-auto px-4 lg:px-0 max-w-[1170px]">
                <div className="py-16">
                    <h1 className="text-4xl font-bold mb-4">{title}</h1>
                    <div className="flex items-center gap-2 text-sm">
                        <Link to="/" className="text-gray-600 hover:text-[#E53E3E]">
                            Home
                        </Link>
                        <span className="text-gray-400">/</span>
                        <span className="text-[#E53E3E]">{title}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Breadcrumb;
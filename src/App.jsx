import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';
import Header from './ui/Header';
import Footer from './ui/Footer'; import { FaShoppingBag } from 'react-icons/fa'; // Import the shopping bag icon


// Lazy load page components
const Home = React.lazy(() => import('./pages/Home'));
const Shop = React.lazy(() => import('./pages/Shop'));
const CartPage = React.lazy(() => import('./pages/CartPage'));
const ProductDetails = React.lazy(() => import('./pages/ProductDetails'));
const CheckoutPage = React.lazy(() => import('./pages/CheckoutPage'));
const PaymentSuccessPage = React.lazy(() => import('./pages/PaymentSuccessPage'));

// ScrollToTop function component
function ScrollToTopOnMount() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <ScrollToTopOnMount />
        <Header />
        <main className="flex-grow">
          <Suspense fallback={
            <div className="min-h-[60vh] flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#E53E3E]"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/payment-success" element={<PaymentSuccessPage />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
        <Link
          to="/shop"
          className="fixed bottom-8 right-8 bg-[#E53E3E] text-white p-4 rounded-full shadow-lg hover:bg-[#d63030] transition-all duration-300 hover:scale-110 z-50 flex items-center gap-2"
        >
          <FaShoppingBag className="text-xl" />
          <span className="hidden md:inline">Continue Shopping</span>
        </Link>
      </div>
    </Router>
  );
};

export default App;
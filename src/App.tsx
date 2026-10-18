import { Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ScrollToTop from "@/components/ScrollToTop";
import Home from "@/pages/Home";
import Printing from "@/pages/Printing";
import LaserCutting from "@/pages/lasercutting";
import About from "@/pages/About";
import ProductsLanding from "@/pages/product";
import AllProducts from "@/pages/AllProducts";
import ProductDetail from "@/pages/ProductDetail";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3dprinting" element={<Printing />} />
          <Route path="/lasercutting" element={<LaserCutting />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<ProductsLanding />} />
          <Route path="/products/all" element={<AllProducts />} />
          <Route path="/products/:slug" element={<ProductDetail />} />
        </Routes>
      </div>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { 
  FaStar, FaRegStar, FaHeart, FaChevronLeft, 
  FaShoppingCart, FaFacebookF, FaTwitter, FaLinkedinIn 
} from "react-icons/fa";

import api from "../config/axios"; // O'zingizning axios sozlangan faylingiz
import RelatedProducts from "../pages/related.jsx";
import MobileActionPanel from "./fixedpanel.jsx";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // State-lar
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Asosiy loading
  const [relatedLoading, setRelatedLoading] = useState(true); // Related uchun loading
  const [activeTab, setActiveTab] = useState("description");
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchFullData = async () => {
      setLoading(true);
      setRelatedLoading(true);
      
      try {
        // 1. Asosiy mahsulot ma'lumotlarini olish
        const res = await api.get(`/products/${id}`);
        
        // Ataylab 2 soniya kechiktiramiz (Skeletonni ko'rish uchun)
        setTimeout(() => {
          setProduct(res.data);
          setMainImage(res.data.pictures?.[0]);
          setLoading(false);
        }, 2000);

        // 2. Reviewlarni olish
        const revRes = await api.get(`/reviews/${id}`);
        setReviews(revRes.data);

        // 3. Related Products (4 ta mahsulot)
        const allProdRes = await api.get('/products');
        if (allProdRes.data && allProdRes.data.products) {
          const filtered = allProdRes.data.products.filter(item => item._id !== id).slice(0, 4);
          
          setTimeout(() => {
            setRelatedProducts(filtered);
            setRelatedLoading(false);
          }, 2500); // Related biroz kechroq chiqishi uchun
        }

      } catch (err) {
        console.error("Xatolik yuz berdi:", err);
        setLoading(false);
        setRelatedLoading(false);
      }
    };

    fetchFullData();
    window.scrollTo(0, 0);
  }, [id]);

  // --- ASOSIY MAHSULOT SKELETONI ---
  if (loading) {
    return (
      <div className="max-w-7xl mx-auto p-6 lg:p-12 animate-pulse">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-gray-200 h-[400px] rounded-2xl"></div>
          <div className="space-y-6">
            <div className="h-10 bg-gray-200 rounded w-3/4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/4"></div>
            <div className="h-24 bg-gray-200 rounded w-full"></div>
            <div className="h-12 bg-gray-200 rounded-full w-1/2"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans text-[#3d3d3d] pb-24">
      <div className="max-w-7xl mx-auto lg:p-12 p-0">
        
        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Images Section */}
          <div className="px-4 lg:px-0">
            <div className="hidden lg:flex gap-4">
              <div className="flex flex-col gap-4 max-h-[450px] overflow-y-auto pr-2">
                {product.pictures?.map((pic, idx) => (
                  <div 
                    key={idx} 
                    onClick={() => setMainImage(pic)}
                    className={`w-20 h-20 border-2 cursor-pointer rounded-lg p-2 ${mainImage === pic ? 'border-[#46A358]' : 'border-gray-100 bg-[#FBFBFB]'}`}
                  >
                    <img src={pic} className="w-full h-full object-contain" alt="thumb" />
                  </div>
                ))}
              </div>
              <div className="flex-1 bg-[#FBFBFB] flex items-center justify-center p-10 rounded-2xl border border-gray-50">
                <img src={mainImage} alt={product.name} className="max-w-full h-auto hover:scale-105 transition-transform duration-500" />
              </div>
            </div>

            {/* Mobile Slider */}
            <div className="lg:hidden relative bg-[#FBFBFB] pt-10 pb-10 rounded-b-[40px]">
              <Swiper modules={[Pagination, Autoplay]} pagination={{ clickable: true }} className="h-72">
                {product.pictures?.map((img, i) => (
                  <SwiperSlide key={i} className="flex justify-center items-center px-10">
                    <img src={img} className="max-h-full object-contain" alt="slide" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>

          {/* Info Section */}
          <div className="px-6 lg:px-0">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <div className="flex justify-between items-center border-b pb-4 mb-6">
              <span className="text-2xl font-bold text-[#46A358]">${product.price?.toFixed(2)}</span>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (i < Math.round(product.rank || 0) ? <FaStar key={i} /> : <FaRegStar key={i} />))}
                </div>
                <span className="text-sm text-gray-400">({reviews.length} Reviews)</span>
              </div>
            </div>

            <h4 className="font-bold text-sm mb-2">Short Description:</h4>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">{product.description}</p>

            {/* Actions */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex items-center bg-[#FBFBFB] rounded-full px-4 py-2 border">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-xl px-2">−</button>
                <span className="px-4 font-bold w-10 text-center">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-xl px-2">+</button>
              </div>
              <button className="bg-[#46A358] text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all active:scale-95">
                BUY NOW
              </button>
              <button className="border border-[#46A358] text-[#46A358] px-4 py-3 rounded-lg hover:bg-green-50 transition-all">
                <FaShoppingCart />
              </button>
            </div>

            <div className="space-y-2 text-sm">
              <p><span className="text-gray-400">SKU:</span> {product._id?.slice(-8)}</p>
              <p><span className="text-gray-400">Category:</span> {product.category}</p>
              <div className="flex items-center gap-3 mt-4">
                <span className="font-bold">Share:</span>
                <FaFacebookF className="cursor-pointer hover:text-[#46A358]" />
                <FaTwitter className="cursor-pointer hover:text-[#46A358]" />
                <FaLinkedinIn className="cursor-pointer hover:text-[#46A358]" />
              </div>
            </div>
          </div>
        </div>

        {/* TABS SECTION */}
        <div className="mt-16 px-6 lg:px-0">
          <div className="flex gap-8 border-b mb-8">
            {["description", "reviews"].map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`pb-3 text-sm font-bold capitalize ${activeTab === tab ? "border-b-2 border-[#46A358] text-[#46A358]" : "text-gray-400"}`}
              >
                {tab === "reviews" ? `Reviews (${reviews.length})` : "Product Description"}
              </button>
            ))}
          </div>
          <div className="text-sm text-gray-500 leading-relaxed min-h-[150px]">
            {activeTab === "description" ? (
              <p>{product.description}</p>
            ) : (
              <div className="space-y-4">
                {reviews.length > 0 ? reviews.map((r, i) => (
                  <div key={i} className="border-b pb-4">
                    <div className="flex justify-between items-center mb-1">
                      <b className="text-gray-700">{r.user?.first_name || "Anonym"}</b>
                      <span className="text-xs text-gray-400">{new Date().toLocaleDateString()}</span>
                    </div>
                    <p className="italic">"{r.comment}"</p>
                  </div>
                )) : <p>No reviews yet.</p>}
              </div>
            )}
          </div>
        </div>

        {/* RELATED PRODUCTS SECTION */}
        <RelatedProducts 
          products={relatedProducts} 
          loading={relatedLoading} 
          navigate={navigate} 
        />
      </div>
      <MobileActionPanel 
        price={product?.price} 
        quantity={quantity} 
        setQuantity={setQuantity} 
      />
    </div>
  );
};

export default ProductDetail;
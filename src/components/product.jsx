import React, { useEffect, useState } from "react";
import api from "../config/axios";
import ProductCard from "./ProductCard";
import "../App.css";

const Product = () => {
  const [product, setproduct] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true); // 1. Loading state qo'shdik

  const limit = 8;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Yuklash boshlandi
      try {
        const res = await api.get("/products?limit=30");
        
        // 2. SETTIMEOUT: 2 soniya kutib keyin ma'lumotni chiqaramiz
        setTimeout(() => {
          setproduct(res.data.products);
          setLoading(false); // Yuklash tugadi
        }, 2000);
        
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  const start = (page - 1) * limit;
  const currentProducts = product.slice(start, start + limit);
  const totalPages = Math.ceil(product.length / limit);

  return (
    <div className="px-4 sm:px-6 lg:px-10">
      {/* TITLE */}
      <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">
        All Plants
      </h2>

      {/* TABS */}
      <div className="flex justify-center gap-6 mb-6">
        <button className="font-semibold text-gray-700 hover:text-green-600">
          All Plants
        </button>
        <button className="font-semibold text-gray-700 hover:text-green-600">
          New Arrivals
        </button>
        <button className="font-semibold text-gray-700 hover:text-green-600">
          Sale
        </button>
      </div>

      {/* PRODUCT GRID */}
      <div className="containers grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
        {loading ? (
          // 3. Yuklanayotgan paytda 8 ta Skeleton chiqadi
          [...Array(limit)].map((_, i) => (
            <ProductCard key={i} loading={true} />
          ))
        ) : (
          // Yuklanib bo'lgach haqiqiy mahsulotlar chiqadi
          currentProducts.map((item) => (
            <ProductCard key={item._id} item={item} loading={false} />
          ))
        )}
      </div>

      {/* PAGINATION */}
      {!loading && ( // Pagination yuklanish paytida ko'rinmay turishi uchun
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-5 mt-6 sm:mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setPage(i + 1);
                window.scrollTo({ top: 400, behavior: "smooth" });
              }}
              className={`shadow hover:bg-gray-200 px-2 sm:px-3 py-1 rounded-md
              ${page === i + 1 ? "bg-green-500 text-white" : "bg-white text-gray-700"}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Product;
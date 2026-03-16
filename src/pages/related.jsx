import React from "react";

const RelatedProducts = ({ products, loading, navigate }) => {
  
  // Siz xohlagan professional Skeleton Card
  const SkeletonCard = () => (
    <div className="p-4 border border-gray-100 rounded-2xl shadow-sm animate-pulse bg-white">
      <div className="flex items-center justify-center h-48 bg-gray-200 rounded-xl mb-4">
        <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="h-3 bg-gray-200 rounded-full w-48 mb-4"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-full"></div>
      <div className="h-2 bg-gray-200 rounded-full mb-2.5 w-full"></div>
      <div className="flex items-center mt-4 pt-2">
        <div className="w-8 h-8 bg-gray-200 rounded-full me-3"></div>
        <div className="h-2 bg-gray-200 rounded-full w-24"></div>
      </div>
    </div>
  );

  return (
    <div className="mt-20 px-6 lg:px-0 mb-10">
      <div className="border-b border-[#46A358]/20 pb-2 mb-8">
        <h3 className="text-[#46A358] font-bold text-lg">Related Products</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {loading ? (
          // Ma'lumot yuklanayotgan 2 soniya davomida 4 ta skeleton ko'rinadi
          [1, 2, 3, 4].map((n) => <SkeletonCard key={n} />)
        ) : (
          // 2 soniyadan keyin mahsulotlar chiqadi
          products?.map((item) => (
            <div 
              key={item._id} 
              onClick={() => { navigate(`/product/${item._id}`); window.scrollTo(0,0); }}
              className="cursor-pointer group"
            >
              <div className="bg-[#FBFBFB] p-4 rounded-xl flex items-center justify-center h-56 border border-transparent group-hover:border-green-100 transition-all">
                <img 
                  src={item.pictures?.[0]} 
                  className="max-h-full object-contain group-hover:scale-110 transition-all duration-500" 
                  alt={item.name} 
                />
              </div>
              <h4 className="mt-4 text-sm font-medium truncate px-1">{item.name}</h4>
              <p className="text-[#46A358] font-bold px-1">${item.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default RelatedProducts;
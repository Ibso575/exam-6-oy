import { FaShoppingCart, FaHeart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductCard = ({ item, loading }) => {
  // --- SKELETON HOLATI ---
  if (loading) {
    return (
      <div className="w-full max-w-xs sm:max-w-sm rounded-md p-3 shadow-md animate-pulse bg-white">
        {/* Rasm joyi */}
        <div className="w-full h-48 sm:h-52 md:h-64 bg-gray-200 rounded-md mb-4 flex items-center justify-center text-gray-300">
           <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
           </svg>
        </div>
        
        {/* Title va Price joyi */}
        <div className="bg-gray-100 p-4 rounded-md mt-5 space-y-3">
          <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
        </div>
      </div>
    );
  }

  // --- HAQIQIY CARD HOLATI ---
  return (
    <Link 
      to={`/product/${item._id}`} 
      className="group w-full pb-[10px] max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg rounded-md p-3 text-center relative shadow-md hover:shadow-lg transition block bg-white"
    >
      <div className="relative">
        <img
          src={item?.pictures?.[0]}
          alt={item?.name}
          className="w-full h-48 sm:h-52 md:h-64 object-contain"
        />

        {/* hover icons */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 duration-300 opacity-0 group-hover:opacity-100 transition">
          <button 
            className="rounded-full bg-white p-2 shadow-md hover:text-green-600 active:scale-90 transition"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <FaShoppingCart />
          </button>
          <button 
            className="rounded-full bg-white p-2 shadow-md hover:text-red-500 active:scale-90 transition"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <FaHeart />
          </button>
          <button 
            className="rounded-full bg-white p-2 shadow-md hover:text-blue-500 active:scale-90 transition"
            onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
          >
            <FaSearch />
          </button>
        </div>
      </div>

      <div className="bg-[#FBFBFB] h-auto pt-2 pb-3 rounded-md mt-5">
        <h3 className="mt-2 text-sm sm:text-base text-gray-700 truncate px-2">{item?.name}</h3>
        <p className="text-[#46A358] font-bold text-sm sm:text-lg">${item?.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
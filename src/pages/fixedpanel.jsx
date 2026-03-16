import React from 'react';
import { FiMinus, FiPlus, FiShoppingCart } from 'react-icons/fi';

// Propslarni qabul qilamiz: price, oldPrice, va quantity (miqdor)
export default function MobileActionPanel({ price, quantity, setQuantity }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 px-5 py-4 pb-8 z-50">
      <div className="flex items-center justify-between gap-4 max-w-md mx-auto">
        
        {/* Miqdor va Narx qismi */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded-full border border-gray-100 w-fit">
             <button 
               onClick={() => setQuantity(Math.max(1, quantity - 1))} 
               className="text-gray-500 hover:text-green-600"
             >
               <FiMinus size={14}/>
             </button>
             <span className="font-bold text-sm text-gray-800">{quantity}</span>
             <button 
               onClick={() => setQuantity(quantity + 1)} 
               className="text-gray-500 hover:text-green-600"
             >
               <FiPlus size={14}/>
             </button>
          </div>

          <div className="flex items-center gap-2 mt-1">
            {/* Narxni formatlab chiqaramiz */}
            <span className="text-[#56ab6a] font-bold text-xl">
              ${price ? price.toFixed(2) : "0.00"}
            </span>
          </div>
        </div>

        {/* Buy Now Tugmasi */}
        <button className="flex-[2] bg-[#56ab6a] text-white font-bold py-4 rounded-2xl shadow-lg shadow-green-100 active:scale-95 transition-all text-center">
          Buy Now
        </button>

        {/* Savatcha Ikonkasi */}
        <button className="bg-gray-50 p-4 rounded-2xl border border-gray-100 active:scale-90 transition-all text-gray-600">
          <FiShoppingCart size={22} />
        </button>

      </div>
    </div>
  );
}
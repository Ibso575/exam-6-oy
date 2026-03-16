import { LuScan } from "react-icons/lu";

import homeIcon from "../assets/Home.svg";
import heartIcon from "../assets/hearticon.svg";
import cartIcon from "../assets/Shopicon.svg";
import userIcon from "../assets/usericon.svg";

export default function MobileBottomNav() {
  return (
    <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[92%] bg-white rounded-full shadow-xl py-3 px-6 flex justify-between items-center z-50">

      {/* Home */}
      <img src={homeIcon} className="w-5 h-5 opacity-70" />

      {/* Heart */}
      <img src={heartIcon} className="w-5 h-5 opacity-70" />

      {/* Scan Button */}
      <div className="relative -mt-10 flex flex-col items-center">
        
        {/* Pastki yarim doira */}
        <div className="absolute top-7 w-16 h-8 bg-green-100 rounded-b-full"></div>

        {/* Button */}
        <div className="relative bg-green-500 w-14 h-14 rounded-full flex items-center justify-center shadow-lg">
          <LuScan className="text-white text-2xl" />
        </div>

      </div>
      {/* Cart */}
      <img src={cartIcon} className="w-5 h-5 opacity-70" />

      {/* User */}
      <img src={userIcon} className="w-5 h-5 opacity-70" />

    </div>
  );
}
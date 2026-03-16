import React from "react";
import heroimg from "../assets/hero-img.png";

export default function Hero() {
  return (
    <div className="relative  bg-gradient-to-b mb-[30px] rounded-[20px] from-green-100 to-white mx-auto w-[90%] h-[250px] md:h-[450px]">
      {/* Desktop Hero */}
      <div className="hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 items-center py-12">
            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <p className="text-gray-600 text-sm font-semibold tracking-wider mb-4">
                WELCOME TO GREENSHOP
              </p>
              <h1 className="text-5xl font-bold leading-tight mb-6">
                LET'S MAKE A BETTER{" "}
                <span className="text-green-500">PLANET</span>
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                We are an online plant shop offering a wide range of cheap and
                trendy plants. Use our plants to create an unique Urban Jungle.
                Order your favorite plants!
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded w-fit transition">
                SHOP NOW
              </button>
            </div>

            {/* Right Images */}
            <div className="flex justify-center items-center relative h-96">
              <img src={heroimg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Hero */}
      <div className="md:hidden px-4 py-6 bg-white">
        <div className="relative bg-gradient-to-r from-green-50 to-green-100 rounded-3xl p-6 overflow-hidden">
          {/* Text */}
          <div className="max-w-[65%]">
            <p className="text-gray-500 text-[10px] font-semibold tracking-wider mb-2">
              WELCOME TO GREENSHOP
            </p>

            <h1 className="text-xl font-bold leading-tight mb-3">
              LET'S MAKE A <span className="text-green-500">BETTER</span>{" "}
              <span className="text-green-500">PLANET</span>
            </h1>

            <p className="text-gray-600 text-[11px] mb-4">
              We are an online plant shop offering a wide range of cheap and
              trendy plants.
            </p>

            <button className="bg-green-500 text-white text-xs font-semibold px-4 py-2 rounded-md">
              SHOP NOW →
            </button>
          </div>

          {/* Image */}
          <img
            src={heroimg}
            alt="plant"
            className="absolute right-[-40px] bottom-3 h-[200px] object-contain"
          />
        </div>
      </div>
    </div>
  );
}

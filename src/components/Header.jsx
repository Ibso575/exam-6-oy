import React from "react";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";

import loginicon from "../assets/Logout.svg";
import logo from "../assets/Logo.svg";

export default function Header() {

  const navStyle = ({ isActive }) =>
    isActive
      ? "text-green-500 font-semibold border-b-2 border-green-500 pb-1"
      : "text-gray-700 hover:text-green-500 transition";

  return (
    <header className="bg-white shadow-sm top-0">

      {/* Desktop Navbar */}
      <div className="hidden md:block border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="flex justify-between items-center h-16">

            {/* Logo */}
            <div className="flex items-center space-x-2">
              <a href="/"><img src={logo} alt="logo" /></a>
            </div>

            {/* Navigation */}
            <nav className="flex space-x-8">

              <NavLink to="/" className={navStyle}>
                Home
              </NavLink>

              <NavLink to="/shop" className={navStyle}>
                Shop
              </NavLink>

              <NavLink to="/plant-care" className={navStyle}>
                Plant Care
              </NavLink>

              <NavLink to="/blogs" className={navStyle}>
                Blogs
              </NavLink>

            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4">

              {/* Search */}
              <button className="text-gray-600 hover:text-green-500 transition">
                <FiSearch className="w-6 h-6" />
              </button>

              {/* Cart */}
              <button className="relative text-gray-600 hover:text-green-500 transition">
                <FiShoppingCart className="w-6 h-6" />

                <span className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold">
                  6
                </span>
              </button>

              {/* Login */}
              <button className="bg-green-500 hover:bg-green-600 flex items-center gap-[10px] text-white px-6 py-2 rounded transition font-medium">
                <img src={loginicon} alt="" />
                Login
              </button>

            </div>

          </div>

        </div>
      </div>

      {/* Mobile Search */}
      <div className="md:hidden bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">

          <div className="flex items-center bg-white border border-gray-300 rounded-lg overflow-hidden">
            <FiSearch className="w-5 h-5 text-gray-400 ml-4" />

            <input
              type="text"
              placeholder="Find your plants"
              className="flex-1 outline-none px-4 py-3 text-gray-700 placeholder-gray-400"
            />

          </div>

        </div>
      </div>

    </header>
  );
}
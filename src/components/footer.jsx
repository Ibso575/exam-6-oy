import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaCcPaypal,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5]">
      <div className="max-w-7xl mx-auto px-6 py-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* My Account */}
        <div>
          <h3 className="font-semibold text-lg mb-4">My Account</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-green-600 cursor-pointer">My Account</li>
            <li className="hover:text-green-600 cursor-pointer">Our stores</li>
            <li className="hover:text-green-600 cursor-pointer">Contact us</li>
            <li className="hover:text-green-600 cursor-pointer">Career</li>
            <li className="hover:text-green-600 cursor-pointer">Specials</li>
          </ul>
        </div>

        {/* Help */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Help & Guide</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-green-600 cursor-pointer">Help Center</li>
            <li className="hover:text-green-600 cursor-pointer">How to Buy</li>
            <li className="hover:text-green-600 cursor-pointer">Shipping & Delivery</li>
            <li className="hover:text-green-600 cursor-pointer">Product Policy</li>
            <li className="hover:text-green-600 cursor-pointer">How to Return</li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li className="hover:text-green-600 cursor-pointer">House Plants</li>
            <li className="hover:text-green-600 cursor-pointer">Potter Plants</li>
            <li className="hover:text-green-600 cursor-pointer">Seeds</li>
            <li className="hover:text-green-600 cursor-pointer">Small Plants</li>
            <li className="hover:text-green-600 cursor-pointer">Accessories</li>
          </ul>
        </div>

        {/* Social + Payment */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Social Media</h3>

          <div className="flex gap-3 mb-6 text-gray-600">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded hover:bg-green-600 hover:text-white transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded hover:bg-green-600 hover:text-white transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded hover:bg-green-600 hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded hover:bg-green-600 hover:text-white transition"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="border p-2 rounded hover:bg-green-600 hover:text-white transition"
            >
              <FaYoutube />
            </a>
          </div>

          <h3 className="font-semibold text-lg mb-3">We accept</h3>

          <div className="flex gap-4 text-3xl text-gray-600">
            <a
              href="https://www.paypal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <FaCcPaypal />
            </a>

            <a
              href="https://www.mastercard.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <FaCcMastercard />
            </a>

            <a
              href="https://www.visa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <FaCcVisa />
            </a>

            <a
              href="https://www.americanexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-600 transition"
            >
              <FaCcAmex />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t text-center text-sm text-gray-500 py-4">
        © 2021 GreenShop. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
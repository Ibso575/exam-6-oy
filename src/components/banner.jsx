import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import "../App.css";

const BannerSection = () => {
  return (
    <div className="containers grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-10 mt-10">
      {/* LEFT BANNER */}
      <div className="relative bg-gray-100 rounded-md overflow-hidden flex items-center p-6">
        {/* Image */}
        <img
          src={banner1} // sening rasm yo‘ling
          alt="Summer Cactus"
          className="w-1/2 h-full object-cover bg-gray-100 rounded-md"
        />
        {/* Text */}
        <div className="ml-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            SUMMER CACTUS & SUCCULENTS
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Find More →
          </button>
        </div>
      </div>

      {/* RIGHT BANNER */}
      <div className="relative bg-gray-100 rounded-md overflow-hidden flex items-center p-6">
        {/* Image */}
        <img
          src={banner2} // sening rasm yo‘ling
          alt="Styling Trends"
          className="w-1/2 h-full object-cover rounded-md"
        />
        {/* Text */}
        <div className="ml-6">
          <h3 className="text-lg sm:text-xl font-bold text-gray-800">
            STYLING TRENDS & MUCH MORE
          </h3>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            We are an online plant shop offering a wide range of cheap and trendy plants
          </p>
          <button className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">
            Find More →
          </button>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;

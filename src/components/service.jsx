import React from "react";
import logo from "../assets/Logo.svg";
import gardenCare from "../assets/service1.svg";
import plantRenovation from "../assets/service2.svg";
import wateringGarden from "../assets/service3.svg";
import "../App.css";

const services = [
  {
    id: 1,
    title: "Garden Care",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    icon: gardenCare,
  },
  {
    id: 2,
    title: "Plant Renovation",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    icon: plantRenovation,
  },
  {
    id: 3,
    title: "Watering Garden",
    desc: "We are an online plant shop offering a wide range of cheap and trendy plants.",
    icon: wateringGarden,
  },
];

const Service = () => {
  return (
    <section className="bg-[#FBFBFB] pt-[30px]">
      <div className="containers py-[15px]">

        {/* TOP PART */}
        <div className="grid md:grid-cols-4 border-b border-gray-200">

          {/* SERVICES */}
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`p-8 text-center ${
                index !== services.length - 1 ? "md:border-r border-gray-200" : ""
              }`}
            >
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 mx-auto mb-4"
              />

              <h3 className="font-semibold text-lg mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {service.desc}
              </p>
            </div>
          ))}

          {/* NEWSLETTER */}
          <div className="p-8">
            <h2 className="font-semibold text-lg mb-3">
              Would you like to join newsletters?
            </h2>

            <div className="flex mb-4">
              <input
                type="email"
                placeholder="enter your email address..."
                className="flex-1 border border-gray-300 px-3 py-2 text-sm rounded-l-md outline-none"
              />

              <button className="bg-green-600 text-white px-5 rounded-r-md text-sm">
                Join
              </button>
            </div>

            <p className="text-gray-500 text-sm">
              We usually post offers and challenges in newsletter. We're your
              online houseplant destination. We offer a wide range of houseplants
              and accessories shipped directly from our (green)house to yours!
            </p>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="grid md:grid-cols-4 items-center bg-[#ECF6EE] px-6 py-4 text-sm text-gray-600">

          {/* LOGO */}
          <div className="flex items-center gap-2 font-semibold text-green-600">
            <img src={logo} alt="logo" className="" />
          </div>

          {/* ADDRESS */}
          <div>
            70 West Buckingham Ave. <br />
            Farmingdale, NY 11735
          </div>

          {/* EMAIL */}
          <div>
            contact@greenshop.com
          </div>

          {/* PHONE */}
          <div>
            +88 01911 717 490
          </div>

        </div>
      </div>
    </section>
  );
};

export default Service;
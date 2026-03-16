import React from "react";
import blog1 from "../assets/blog1.png";
import blog2 from "../assets/blog2.png";
import blog3 from "../assets/blog3.png";
import blog4 from "../assets/blog4.png";
import  "../App.css";

const blogPosts = [
  {
    id: 1,
    date: "September 12",
    readTime: "6 minutes",
    title: "Cactus & Succulent Care Tips",
    desc: "Cacti are succulents are easy care plants for any home or patio.",
    image: blog1 // o'z rasm yo'lingni qo'y
  },
  {
    id: 2,
    date: "September 13",
    readTime: "2 minutes",
    title: "Top 10 Succulents for Your Home",
    desc: "Best in hanging baskets. Prefers medium to high light.",
    image: blog2,
  },
  {
    id: 3,
    date: "September 15",
    readTime: "3 minutes",
    title: "Cacti & Succulent Care Tips",
    desc: "Cacti and succulents thrive in containers and because most are..",
    image: blog3,
  },
  {
    id: 4,
    date: "September 15",
    readTime: "2 minutes",
    title: "Best Houseplants Room By Room",
    desc: "The benefits of houseplants are endless. In addition to..",
    image: blog4,
  },
];

const BlogSection = () => {
  return (
    <div className="containers px-4 sm:px-6 lg:px-10 mt-10 ">
      {/* TITLE */}
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold">Our Blog Posts</h2>
        <p className="text-gray-600 mt-2">
          We are an online plant shop offering a wide range of cheap and trendy plants
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
        {blogPosts.map((post) => (
          <div key={post.id} className="bg-white shadow rounded-md hover:shadow-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">
                {post.date} | Read in {post.readTime}
              </p>
              <h3 className="text-lg h-[60px] font-semibold mt-2">{post.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{post.desc}</p>
              <button className="mt-3 text-green-600 font-semibold hover:underline">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;

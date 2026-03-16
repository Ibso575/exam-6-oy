import React from "react";
import Hero from "../components/Hero";
import Product from "../components/product";
import BannerSection from "../components/banner";
import BlogSection from "../components/blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <BannerSection />
      <BlogSection />
    </>
  );
};

export default Home;
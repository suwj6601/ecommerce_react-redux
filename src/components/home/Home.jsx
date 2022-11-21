import React from "react";
import Card from "./hero/Card";
import Hero from "./hero/Hero";
import Product from "./product/Product";
import Banner from "./banner/Banner";
import TopProduct from "./topproduct/TopProduct";
import Price from "./price/Price";
import Testimonial from "./testimonial/Testimonial";
import Blog from "./blog/Blog";

const Home = () => {
  return (
    <>
      <Hero />
      <Card />
      <Product />
      <Banner />
      <TopProduct />
      <Price />
      <Testimonial />
      <Blog />
    </>
  );
};

export default Home;

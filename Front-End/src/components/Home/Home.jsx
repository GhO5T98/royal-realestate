import React from "react";
import "./home.css";
import Hero from "./Hero/Hero";
import PopularProperties from "./PopularProperties/PopularProperties";
import AboutUs from "./AboutUs/AboutUs";
import Contact from "./Contact/Contact";
import Footer from "../Footer/Footer";


const Home = () => {
  return (
    <>
      <Hero />
      <PopularProperties />
      <AboutUs />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;

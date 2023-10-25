import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import HomeHero from "../../Components/HomeHero/HomeHero";
import HomePage from "../../Components/HomePage/HomePage";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <HomeHero />
      <HomePage />
      <Footer />
    </div>
  );
};

export default Home;

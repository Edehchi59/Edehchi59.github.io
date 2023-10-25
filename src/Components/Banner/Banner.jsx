import React from "react";
import "../Banner/Banner.scss";

const Banner = ({ title, BgImg, phone }) => {
  // const img = "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/01/dine-out.jpg"
  const bgimg = {
    background: `url(${BgImg})`,
  };
  const feather =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";
  return (
    <div className="bannerSec" style={bgimg}>
      <h1>{title}.</h1>
      <h2>{phone}</h2>
      <img src={feather} alt="feather" />
    </div>
  );
};

export default Banner;

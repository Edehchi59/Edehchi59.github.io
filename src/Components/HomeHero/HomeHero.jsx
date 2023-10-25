import React, { useEffect } from "react";
import "../HomeHero/Homehero.scss";
import "aos/dist/aos.css";
import Aos from "aos";
const HomeHero = () => {
  const fork =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/fork-free-img.png";
  const knife =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/knife-free-imge.png";
  const feather =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="container">
      <div className="wrapper">
        <div className="contentSec">
          <div className="fork">
            <img src={fork} alt="fork" />
          </div>
          <div className="Content">
            <img src={feather} alt="feather" />
            <div className="heroText">
              <h1 data-aos="fade-down" data-aos-easing="linear">
                Fresco.
              </h1>
              <div className="Hero__subText">Italian Specialities</div>
              <div className="goodFoodWrapper">
                <span></span>
                <div className="goodFoodtext">
                  <p>good food | good wine</p>
                </div>
                <span></span>
              </div>
            </div>
          </div>
          <div className="knife">
            <img src={knife} alt="Knife" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;

import React, { useEffect } from "react";
import "../Menu/Menu.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import foodItemList from "../../Components/ProductItems/Product";
import LunchItem from "../../Components/ProductItems/LunchItem";
import "aos/dist/aos.css";
import Aos from "aos";
const Menu = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <section className="MenuSec">
        <Banner
          title={"Menu"}
          BgImg={
            "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/01/dine-out.jpg"
          }
        />
        <div className="pasteSec">
          <div className="pasteWrapper">
            {foodItemList
              .filter((foodItem) => foodItem.foodName === "pasta")
              .map((foodItem, index) => (
                <div key={index} className="pasteFlex">
                  <div className="pasteImgSec">
                    <div className="pasteImg">
                      <img src={foodItem.image.img} alt={foodItem.image.alt} />
                    </div>
                  </div>
                  <div className="pasteDes">
                    <h1 data-aos="fade-up" data-aos-easing="linear">
                      {foodItem.foodName}
                    </h1>
                    <img src={foodItem.feather} alt="feather" />
                    {foodItem.content.map((contentItem, contentIndex) => (
                      <div
                        key={contentIndex}
                        className="pastaDesflex"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                      >
                        <div className="desRecipe">
                          <h3>{contentItem.title}</h3>
                          <p>{contentItem.Desc}</p>
                        </div>
                        <div className="price">{contentItem.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className=" pizzasec">
          <div className="pizzaWraper">
            {foodItemList
              .filter((foodItem) => foodItem.foodName === "pizza")
              .map((foodItem, index) => (
                <div key={index} className="pizzaFlex">
                  <div className="pizzaDes">
                    <h1 data-aos="fade-up" data-aos-easing="linear">
                      {foodItem.foodName}
                    </h1>
                    <img src={foodItem.feather} alt="feather" />
                    {foodItem.content.map((contentItem, contentIndex) => (
                      <div
                        key={contentIndex}
                        className="pizzaDesflex"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                      >
                        <div className="desRecipe">
                          <h3>{contentItem.title}</h3>
                          <p>{contentItem.Desc}</p>
                        </div>
                        <div className="price">{contentItem.price}</div>
                      </div>
                    ))}
                  </div>
                  <div className="pizzaImgSec">
                    <div className="pizzaImg">
                      <img src={foodItem.image.img} alt={foodItem.image.alt} />
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="platterSec">
          <div className="platterWrapper">
            {foodItemList
              .filter((foodItem) => foodItem.foodName === "platter")
              .map((foodItem, index) => (
                <div key={index} className="platterFlex">
                  <div className="platterImgSec">
                    <div className="platterImg">
                      <img src={foodItem.image.img} alt={foodItem.image.alt} />
                    </div>
                  </div>
                  <div className="platterDes">
                    <h1 data-aos="fade-up" data-aos-easing="linear">
                      {foodItem.foodName}
                    </h1>
                    <img src={foodItem.feather} alt="feather" />
                    {foodItem.content.map((contentItem, contentIndex) => (
                      <div
                        key={contentIndex}
                        className="platterDesflex"
                        data-aos="fade-up"
                        data-aos-easing="linear"
                      >
                        <div className="desRecipe">
                          <h3>{contentItem.title}</h3>
                          <p>{contentItem.Desc}</p>
                        </div>
                        <div className="price">{contentItem.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>

        <div className="lunchSec">
          <div className="lunchWrapper">
            <h1>six tasty lunches for $9</h1>
            <div className="lunchFlex">
              <div className="lunchCard">
                {LunchItem.slice(0, 3).map((item, index) => (
                  <div className="cardflex brT" key={item.id}>
                    <img src={item.img} alt={`lunch-${item.id}`} />
                    <div className="desc">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="lunchCard">
                {LunchItem.slice(3, 6).map((item, index) => (
                  <div className="cardflex brT" key={item.id}>
                    <img src={item.img} alt={`lunch-${item.id}`} />
                    <div className="desc">
                      <h2>{item.title}</h2>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Menu;

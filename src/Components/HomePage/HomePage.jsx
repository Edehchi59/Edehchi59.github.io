import React from "react";
import "../HomePage/HomePage.scss";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { BsYelp } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { BiLogoTwitter } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";
const HomePage = () => {
  const feather =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";
  const cardImgOne =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-1.jpg";
  const cardImgTwo =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-2.jpg";
  const cardImgThree =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-3.jpg";
  const cardImgFour =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/Menu-item-4.jpg";
  const imgOne =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic49-free-img.png";
  const imgTwo =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic50-free-img.png";
  const imgThree =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic51-free-img.png";

  return (
    <div className="homePageContainer">
      <div className="wrapper">
        <div className="homepageWrapper">
          {/* welcome sections  */}
          <div className="welcomeSec">
            <div className="welcomeFlex">
              <div className="content">
                <h3>country most loved!</h3>
                <h1>welcome</h1>
                <h6>we are locally crafted food & wine serving since 1978 </h6>

                <div className="subText">
                  <p>
                    Congue, gravida. Placeat nibh sunt semper elementum anim!
                    Integer lectus debitis auctor. Molestias vivamus eligendi
                    ut, cupidatat nisl iaculis etiam! Laboris aenean .
                  </p>
                </div>
                <a href="#" className="btn">
                  more about us <HiOutlineArrowNarrowRight className="icon" />
                </a>
              </div>
              <div className="contentImg Noshadow"></div>
              <div className="contentImg Bgshadow">
                <div className="BgshadowContent">
                  <h1>hours</h1>
                  <div className="spanSec">
                    <span className="date">Monday-Saturday | 9AM-1PM</span>
                    <span className="date">Saturday-Sunday | 9AM-4PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Menu sections  */}
          <div className="menuSec">
            <div className="menuflex">
              <div className="content">
                <div className="img">
                  <img src={feather} alt="feather" />
                </div>
                <h1>our menu</h1>
                <h3>Quality Ingredients, Tasty Meals</h3>
                <p>
                  Congue, gravida. Placeat nibh sunt semper elementum anim!
                  Integer lectus debitis auctor. Molestias vivamus eligendi ut,
                  cupidatat nisl iaculis etiam! Laboris aenean .
                </p>
              </div>
            </div>
          </div>
          {/* Menu Img Section */}
          <div className="menuImg">
            <div className="menuImgSec">
              <div className="menuImgBox">
                <div className="menuBox">
                  <div className="menuCardFlex">
                    <div className="menuTextCard grid-item">
                      <div className="textCardBox">
                        <h1>Ham and Fontina</h1>
                        <p>Roasted eggplant spread, marinated tomatoes</p>

                        <div className="price">$29.5</div>
                      </div>
                    </div>

                    <div className="menuImgCard grid-item">
                      <img src={cardImgOne} alt="cardImgOne" />
                    </div>

                    <div className="menuTextCard grid-item">
                      <div className="textCardBox">
                        <h1>Chicken Italiano</h1>
                        <p>Tristique perferen possimus neque fermentum vel.</p>

                        <div className="price">$11</div>
                      </div>
                    </div>

                    <div className="menuImgCard grid-item">
                      <img src={cardImgTwo} alt="cardImgOne" />
                    </div>

                    <div className="menuTextCard grid-item">
                      <div className="textCardBox">
                        <h1>Spaghetti Delle</h1>
                        <p>
                          Rustic baguette toasted with herb-garlic butter &
                          parmesan
                        </p>

                        <div className="price">$28</div>
                      </div>
                    </div>

                    <div className="menuImgCard grid-item">
                      <img src={cardImgThree} alt="cardImgOne" />
                    </div>

                    <div className="menuTextCard grid-item">
                      <div className="textCardBox">
                        <h1>Crumbled Sausage</h1>
                        <p>
                          Natural unpressed ham, fontina, provolone, aioli,
                          fresh tomato
                        </p>

                        <div className="price">$12.5</div>
                      </div>
                    </div>

                    <div className="menuImgCard grid-item">
                      <img src={cardImgFour} alt="cardImgOne" />
                    </div>

                    <div className="menuTextCard grid-item">
                      <div className="textCardBox">
                        <h1>Baked Meatballs</h1>
                        <p>
                          Our handmade meatballs baked in savory marinara with
                          melted cheese
                        </p>

                        <div className="price">$32.5</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btnSec">
                  <a href="#" className="btn">
                    discover entire menu
                    <HiOutlineArrowNarrowRight className="icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Happy hours */}
        <div className="happyHourSec">
          <div className="flex">
            <div className="pubImg grid">
              <div className="imgContent">
                <div className="imgShadowContent">
                  <h1>Good Food | Good Wine​</h1>
                </div>
              </div>
            </div>

            <div className="happyHourContent grid">
              <h2>Wednesdays Means</h2>
              <h1>Happy Hours!</h1>
              <h3>Half Price Bottles of Wine and Six Tasty Lunches for $9</h3>
              <p>
                Congue, gravida. Placeat nibh sunt semper elementum anim!
                Integer lectus debitis auctor. Nunc quisquam adipisicing leo,
                tempora ipsam pede nostrum. Turpis tempus fusce, sed, orci
                eligendi
              </p>
              <a href="#" className="btn">
                discover offer <HiOutlineArrowNarrowRight className="icon" />
              </a>
            </div>
          </div>
        </div>
        {/* Reviews Section */}
        <section className="reviewSec">
          <div className="reviewWrapper">
            <div className="reviewFlex">
              <div className="flex1">
                <img src={feather} alt="feather" />

                <h1>happy customers!</h1>

                <div className="reviewCard">
                  <img src={imgOne} alt="imgOne" />
                  <div className="comment">
                    "Aliquip habitant ea suscipit ea varius cras habitasse
                    ligula doloremque cepteur vehicula iste nibh, mattis
                    assumenda massa"
                  </div>
                  <div className="name">
                    <span>- Shamika Smith</span>
                  </div>
                </div>
              </div>
              <div className="flex2">
                <div className="reviewCard">
                  <img src={imgTwo} alt="imgTwo" />
                  <div className="comment">
                    "Aliquip habitant ea suscipit ea varius cras habitasse
                    ligula doloremque. Fuga reprehenderit quis unde soluta."
                  </div>
                  <div className="name">
                    <span>- Jose Hatts</span>
                  </div>
                </div>
                <div className="reviewCard">
                  <img src={imgThree} alt="imgThree" />
                  <div className="comment">
                    "Aliquip habitant ea suscipit ea varius cras habitasse
                    ligula doloremque"
                  </div>
                  <div className="name">
                    <span>- Monica Tata</span>
                  </div>
                </div>
                <div className="socialLinks">
                  <h1>Check Out Our Reviews</h1>

                  <div className="links">
                    <BsYelp className="icon" />

                    <BiLogoFacebook className="icon" />

                    <BiLogoTwitter className="icon" />

                    <AiOutlineGooglePlus className="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default HomePage;

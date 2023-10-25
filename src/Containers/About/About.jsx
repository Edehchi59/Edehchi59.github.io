import React from "react";
import "../About/About.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { AiFillCar } from "react-icons/ai";
import { FaMusic } from "react-icons/fa";
import { FaFireFlameCurved } from "react-icons/fa6";
import { BiWifi } from "react-icons/bi";
const About = () => {
  const feather =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2021/03/parcelli.png";
  return (
    <>
      <Navbar />
      <section className="aboutSec">
        <Banner
          title={"about us"}
          BgImg={
            "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2019/12/About-us-banner.jpg"
          }
        />
        <div className="aboutUsSec">
          <div className="aboutUsWrapper">
            <div className="aboutUsFlex">
              <div className="content">
                <img src={feather} alt="feather" />
                <h4>
                  Our Restaurant Is A Collective Of Amazing People Striving To
                  Build Delightful Italian Cuisine.
                </h4>
                <p>
                  Lectus fringilla occaecat iste pretium fugiat convallis a,
                  veniam conubia qui leo quod sodales! Nemo hendrerit laborum,
                  error! Reiciendis, voluptas officiis, placerat ratione
                  blanditiis! Habitasse dui proin cupidatat fringilla, ipsum
                  dolor quidem, convallis nam, nulla quis optio, iure
                  pellentesque sociosqu saepe explicabo similique placeat odit
                  tempore tenetur litora, impedit sollicitudin mus deleniti,
                  recusandae anim quo.
                </p>
                <div className="paragraph">
                  <div className="flex1">
                    <h1>R</h1>
                    <div className="ptag">
                      <p>
                        el nulla pulvinar montes suspendisse, turpis. Elementum
                        nibh, autem nulla ullam, proident, hac ratione platea!
                      </p>
                    </div>
                  </div>
                  <div className="flex2">
                    <p>
                      Libero nam, harum quisque turpis fames sollicitudin
                      blanditiis est aliquam aptent blandit class, occaecat!
                      Fames.
                    </p>
                  </div>
                </div>
              </div>
              <div className="imgSec">
                <div className="imgWrapper">
                  <div className="imgFlex">
                    <img
                      className="LongImg"
                      src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/Serving-chef-oi0astk6nghnyuecvvcnt5rykkia9bojiq7x4xk93k.jpg"
                      alt="img-1"
                    />

                    <div className="gridImg">
                      <img
                        className="ShortImg"
                        src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/Red-wine-img-oi0ax5le5ycf75e9wdefnj8f9aw7dn02gr1co2i16w.jpg"
                        alt="img-2"
                      />
                      <img
                        className="ShortImg "
                        src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/elementor/thumbs/pic34-free-img-o8mber8yudr26qzmrtm45h9j0sz2g5ol7km7c8jeko.jpg"
                        alt="img-3"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="chefSec">
          <div className="chefWrapper">
            <div className="bgimg">
              <h1>Our Chefs</h1>
              <img
                src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png"
                alt="white-feather"
              />
              <div className="chefImgSec">
                <div className="chefImgFlex">
                  <div className="firstLayer">
                    <div className="imgCards grid-One">
                      <h2>Charles Davis</h2>
                      <h3>Head Chef</h3>
                    </div>
                    <div className="imgCards grid-two">
                      <h2>Vincent Green</h2>
                      <h3>Sous Chef</h3>
                    </div>
                    <div className="imgCards grid-three">
                      <h2>Samuel Sims</h2>
                      <h3>Restaurant Manager</h3>
                    </div>
                  </div>
                  <div className="secondLayer">
                    <div className="imgCards grid-four">
                      <h2>David Butler</h2>
                      <h3>Pasta Expert</h3>
                    </div>
                    <div className="imgCards grid-five">
                      <h2>Looking For Management Interns</h2>
                      <a href="" className="btn">
                        apply today
                        <HiOutlineArrowNarrowRight className="icon" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ammentiesWrapper">
            <h1>Restaurant Amenities</h1>
            <img
              src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/divider-free-img.png"
              alt="faether"
            />
            <div className="amenties">
              <div className="links">
                <BiWifi className="icon" /> <h2>Free WiFi</h2>
              </div>
              <div className="links">
                <FaFireFlameCurved className="icon" /> <h2>Smoking Zone</h2>
              </div>
              <div className="links">
                <FaMusic className="icon" /> <h2>Live Music</h2>
              </div>
              <div className="links">
                <AiFillCar className="icon" /> <h2>Parking</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="reviewSec">
          <div className="reviewWrapper">
            <div className="review">
              <p>
                "Aliquip habitant ea suscipit ea varius cras habitasse ligula
                doloremque cepteur vehicula iste nibh, mattis assumenda massa."
              </p>
              <div className="profile">
                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/pic49-free-img.png"
                  alt="img-person"
                />
                <h4>- Shamika Smith​</h4>
              </div>
            </div>
          </div>
          <div className="recommendWrapper">
            <h3>Recommended By</h3>
            <div className="recommendFlex">
              <div className="link">
                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/tripadvisorlogo1-free-img.png"
                  alt=""
                />
              </div>
              <div className="link">
                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/yelp-free-img.png"
                  alt=""
                />
              </div>
              <div className="link">
                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/google-reviews-free-img.png"
                  alt=""
                />
              </div>
              <div className="link">
                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/fb-free-imng.png"
                  alt=""
                />
              </div>
              <div className="link">
                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/tweet-free-img.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;

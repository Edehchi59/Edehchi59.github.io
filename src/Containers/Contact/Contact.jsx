import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import "../Contact/Contact.scss";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsYelp } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineGooglePlus } from "react-icons/ai";
import { BiLogoTwitter } from "react-icons/bi";
import { BsBalloonHeartFill } from "react-icons/bs";
const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleGetForm = (e) => {
    const { name, value } = e.target;

    if (name === "Email") {
      setEmail(value);
    } else if (name === "Message") {
      setMessage(value);
    } else if (name === "Phone") {
      setPhone(value);
    } else if (name === "Name") {
      setName(value);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // EmailJs handles
    const serviceId = "service_2j3s018";
    const userId = "Ncb7acTLu5z7gPf2T";
    const templateId = "template_axe9lph";

    const emailParams = {
      to_email: "edehchinedu59@gmail.com",
      from_name: name,
      from_email: email,
      from_phone: phone,
      message: message,
    };

    // send the email using EmailJS
    emailjs
      .send(serviceId, templateId, emailParams, userId)
      .then((result) => {
        console.log("Email sent successfully", result.text);
        setEmail("");
        setMessage("");
        setName("");
        setPhone("");
        // Display the confirmation message
        setShowConfirmation(true);
      })
      .catch((error) => {
        console.log("Error sending email", error);
      });
  };
  return (
    <>
      <Navbar />
      <section className="contactSec">
        <Banner
          title={"Book A Table."}
          BgImg={
            "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2020/01/dine-out.jpg"
          }
          phone={"+2348037020923"}
        />
        <div className="mapSec">
          <div className="mapWrapper">
            <div className="mapFlex">
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3071.6276040256726!2d7.478016873608358!3d6.429660424249607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1044a1828fcbbb75%3A0x4c1f02c145d45a2a!2s12%20Ejindu%20Street%2C%20Ogbete%20400102%2C%20Enugu!5e1!3m2!1sen!2sng!4v1698145433569!5m2!1sen!2sng"
                  width="693"
                  height="521"
                  style={{ border: 0 }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div className="img">
                <div className="imgContent">
                  <h1>hours</h1>
                  <div className="spanSec">
                    <span className="date">Monday-Saturday | 9AM-1PM</span>
                    <span className="date">Saturday-Sunday | 9AM-4PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inquiresSec">
          <div className="inquireWrapper">
            <div className="inquireFlex">
              <div className="locationSec">
                <h5>Our Locations:</h5>
                <div className="locationFlex">
                  <div className="lIcon">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <h2>Park Street, 12th floor, NY Lane 2</h2>
                </div>
                <div className="locationFlex">
                  <div className="lIcon">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <h2>123 Fifth Avenue, New York, NY 10160</h2>
                </div>
                <div className="locationFlex">
                  <div className="lIcon">
                    <FaMapMarkerAlt className="icon" />
                  </div>
                  <h2>2nd Bougainvillea, New York, NY 10160</h2>
                </div>

                <img
                  src="https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/divider-free-img.png"
                  alt="feather"
                />
                <h4>Check Reviews On</h4>

                <div className="socialLinks">
                  <div className="flex">
                    <div className="links">
                      <BsYelp className="icon" />

                      <BiLogoFacebook className="icon" />

                      <BiLogoTwitter className="icon" />

                      <AiOutlineGooglePlus className="icon" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="contactForm">
                <h1>For Online Inquiries</h1>
                <p>
                  Excepteur, porttitor provident repudiandae nisi nisi. Lorem
                  cupiditate.
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    name="Name"
                    id="Name"
                    value={name}
                    onChange={handleGetForm}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    name="Email"
                    id="Email"
                    value={email}
                    onChange={handleGetForm}
                  />
                  <input
                    type="text"
                    placeholder="Contact No."
                    required
                    name="Phone"
                    id="Phone"
                    value={phone}
                    onChange={handleGetForm}
                  />
                  <textarea
                    name="Message"
                    id="Message"
                    placeholder="Message"
                    required
                    value={message}
                    onChange={handleGetForm}
                  ></textarea>

                  <button type="submit" className="btn">
                    send enquires
                  </button>
                </form>
                <div
                  className="submitted"
                  style={{ display: showConfirmation ? "block" : "none" }}
                >
                  <BsBalloonHeartFill className="icon" />
                  <h4>Thanks we received your message</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

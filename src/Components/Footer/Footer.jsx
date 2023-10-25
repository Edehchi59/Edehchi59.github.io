import React from "react";
import "../Footer/Footer.scss";
import { BsFillSuitHeartFill } from "react-icons/bs";
const Footer = () => {
  return (
    <footer>
      <div className="footerSec">
        <div className="footerWrapper">
          <h1>Call for All Your​ Reservations</h1>

          <h2>+123-456-1010</h2>

          <p>
            Copyright © 2023 Italian Restaurant | Designed with{" "}
            <BsFillSuitHeartFill className="icon" /> By Edeh Chinedu Daniel
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

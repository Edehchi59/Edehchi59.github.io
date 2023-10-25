import React, { useEffect, useState } from "react";
import "../Navbar/Navbar.scss";
import { AiOutlineMenu } from "react-icons/ai";
import Hamburger from "hamburger-react";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
  const [showNavItem, setShowNavItem] = useState(false);
  const [links, setLinks] = useState([
    { link: "/", title: "home", isActive: false },
    { link: "/menu", title: "menu", isActive: false },
    { link: "/about", title: "about us", isActive: false },
    { link: "/contact", title: "contact", isActive: false },
  ]);
  const navigate = useNavigate();
  useEffect(() => {
    const myLinks = links.map((link) => {
      if (link.link === window.location.pathname) {
        return { ...link, isActive: !link.isActive };
      } else {
        return { ...link, isActive: false };
      }
    });
    setLinks(myLinks);
  }, []);

  const toggleMenu = () => {
    setShowNavItem(!showNavItem); // Toggle the visibility of your menu
  };
  const logo =
    "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/10/fresco-free-logo.svg";
  return (
    <>
      <header>
        <nav>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
          <div className="navItems">
            <ul className="navlinks">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href=""
                    className={`${link.isActive && "active"}`}
                    onClick={() => navigate(link.link)}
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
            <a href="#" className="navBtn">
              Reservation
            </a>
          </div>
          <Hamburger
            direction="left"
            className="icon"
            toggled={showNavItem} // Pass the state of your menu to control the Hamburger component
            toggle={toggleMenu}
            size={32}
          />
        </nav>
      </header>
      <div className="hamburgerWrapper" id={showNavItem ? "" : "hidden"}>
        <div className="hamburgerMenu">
          {links.map((link, index) => (
            <li key={index}>
              <a
                href=""
                className={`${link.isActive && "active"}`}
                onClick={() => navigate(link.link)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;

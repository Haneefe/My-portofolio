import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion as m} from "framer-motion";
const NavBar = () => {
  const [hamCLick, setHamClick] = useState(false);
  const [color, setColor] = useState(false);
  const handleHamCLick = (e) => {
    setHamClick(!hamCLick);
    //
  };
  const resumeDownloadHandler=(url)=>{

  }
  const changeColor = () => {
    //
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);
  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portofolio</h1>
      </Link>

      <m.ul className={!hamCLick ? "navMenu" : "navMenu active"}>
        {/* <ul activeClassName={styles["navMenu"]}> */}
        <li>
          <Link to="/">
            <h1>Home</h1>
          </Link>
        </li>
        <li>
          <Link to="/project">
            <h1>Project</h1>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <h1>About</h1>
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <h1>Contact</h1>
          </Link>
        </li>
        
      </m.ul>
      <div className="hamburger" onClick={handleHamCLick}>
        {hamCLick ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
        {/* <FaTimes onClick={handleHamCLick} size={20} style={{ color: "#fff" }} />
        <FaBars onClick={handleHamCLick} size={20} style={{ color: "#fff" }} /> */}
      </div>
    </div>
  );
};

export default NavBar;

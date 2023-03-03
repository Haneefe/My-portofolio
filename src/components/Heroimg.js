import React from "react";
import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";
import download from "../assets/downloadicon.png"
const Heroimg = () => {
  //

  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi,I'M Haneef</p>
        <h1>React Developer.</h1>
        <div>
          <Link to="/project" className="btn">
            Projects
          </Link>
          <a href="Haneef resume 2023.pdf" download="Haneef resume 2023.pdf" className="btn btn-light">
            Resume
            </a>
          {/* <Link to="/contact" hr className="btn btn-light">
           Contact
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Heroimg;

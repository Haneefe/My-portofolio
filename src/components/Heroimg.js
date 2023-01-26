import React from "react";
import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import { Link } from "react-router-dom";

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
          <Link to="/contact" className="btn btn-light">
            contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;

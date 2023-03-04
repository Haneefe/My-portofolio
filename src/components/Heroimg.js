import React from "react";
import "./Heroimg.css";
import IntroImg from "../assets/intro-bg.jpg";
import IntroImgPlaceHolder from "../assets/intro-bg-placeholder.webp";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Heroimg = () => {
  //

  return (
    <div className="hero">
      <div className="mask">
        <LazyLoadImage className="into-img" src={IntroImg} alt="IntroImg" placeholderSrc={IntroImgPlaceHolder} height={"100%"} width={"100%"}/>
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
        </div>
      </div>
    </div>
  );
};

export default Heroimg;

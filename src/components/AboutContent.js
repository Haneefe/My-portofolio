import React from "react";
import { Link } from "react-router-dom";
import "./AboutContent.css";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";
import React1placeholder from "../assets/react1-placeholder.webp";
import React2placeholder from "../assets/react2-placeholder.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AboutContent = () => {
  //
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>
          Im a react front-end developer.I create responsive websites and react
          native mobile applications (only front-end).
        </p>
        <Link to="/contact">
          <button className="btn">CONTACT</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <LazyLoadImage className="img" src={React1} placeholderSrc={React1placeholder} alt="alt" />
          </div>
          <div className="img-stack bottom">
            <LazyLoadImage className="img" src={React2} placeholderSrc={React2placeholder} alt="alt" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;

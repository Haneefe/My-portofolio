import React from "react";
import "./Work.css";
import proj1 from "../assets/project1.png";

import { Link } from "react-router-dom";
const WorkCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="immage" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          <Link to={props.view} className="btn">
            View
          </Link>
          <Link to="url.com" className="btn">
            Source
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

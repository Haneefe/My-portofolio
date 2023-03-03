import React from "react";
import "./Work.css";

import { Link } from "react-router-dom";
const WorkCard = (props) => {
  console.log(props)
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="immage" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
        <div className="pro-btns">
          {/* <Link to={{pathname:props.view}} target="_blank" className="btn">
            View
          </Link> */}
          <a className="btn" href={props.view} target="_blank">VIEW</a>
          <a className="btn" href={props.source} target="_blank">SOURCE</a>
          {/* <Link to="url.com" className="btn">
            Source
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;

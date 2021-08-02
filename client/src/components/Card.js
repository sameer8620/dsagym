import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="card_box">
      <h3>{props.topic}</h3>
      <Link className="button card_button" to={"/sdesheet/" + props.topic}>
        Start
      </Link>
    </div>
  );
};

export default Card;

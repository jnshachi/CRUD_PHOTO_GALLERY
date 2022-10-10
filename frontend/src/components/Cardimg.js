import React from "react";
import "./Cardimg.css";
import { Link } from "react-router-dom";
const Cardimg = (props) => {
  console.log(props.data);
  return (
    <div className="card">
      <Link to={`/show/${props.id}`}>
        <img src={props.data} alt="" srcset="" />
      </Link>
    </div>
  );
};

export default Cardimg;

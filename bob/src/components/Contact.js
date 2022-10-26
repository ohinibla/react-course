import React from "react";
import ContactImage from "../images/pexels-pixabay-45201.jpg";
import Placeholder from "../images/Star 1.svg";

export default function Contact(props) {
  console.log(props);
  return (
    <div className="card--container">
      <div>
        <img src={ContactImage} alt="" className="contact--image" />
        <h3>{props.name}</h3>
        <div className="card--phone">
          <img src={Placeholder} alt="" />
          <h5>{props.phone_no}</h5>
        </div>
        <div className="card--email">
          <img src={Placeholder} alt="" />
          <h5>{props.email}</h5>
        </div>
      </div>
    </div>
  );
}

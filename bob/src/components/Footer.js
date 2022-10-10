import React from "react";

import twitter from "../images/Twitter Icon.svg";
import facebook from "../images/Facebook Icon.svg";
import instagram from "../images/Instagram Icon.svg";
import github from "../images/GitHub Icon.svg";

export default function Footer() {
  return (
    <div className="container container--footer">
      <a href="#">
        <img src={twitter} alt="" />
      </a>
      <a href="#">
        <img src={facebook} alt="" />
      </a>
      <a href="#">
        <img src={instagram} alt="" />
      </a>
      <a href="#">
        <img src={github} alt="" />
      </a>
    </div>
  );
}

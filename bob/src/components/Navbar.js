import React from "react";
import ReactLogo from "../images/React-icon.svg.png";

export default function Navbar() {
  return (
    <nav>
      <img src={ReactLogo} />
      <h1>ReactFacts</h1>
      <h2>React Course - Project 1</h2>
    </nav>
  );
}

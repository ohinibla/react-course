import React from "react";
import ReactLogo from "../images/reactjs-icon 2.svg";

export default function Main() {
  return (
    <div class="main-container">
      <h1 className="header">Fun facts about React</h1>
      <ul>
        <li>Was released in 2013</li>
        <li>Was originally created by Jordan Walkeh</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
      <img src={ReactLogo} alt="" />
    </div>
  );
}

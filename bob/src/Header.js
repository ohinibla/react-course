import React from "react";
import reactlogo from "../logo.svg";

export default function Header() {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={reactlogo} />
          <h1>Fantastic React page!</h1>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contacts</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

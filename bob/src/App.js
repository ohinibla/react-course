import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import "./style.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDark) => !prevDark);
  }

  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

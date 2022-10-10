import React from "react";

import About from "./components/About";
import Info from "./components/Info";
import Interests from "./components/Interest";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="container container--app">
      <div className="container container--main">
        <Info />
        <div className="container texts">
          <About />
          <Interests />
        </div>
        <Footer />
      </div>
    </div>
  );
}

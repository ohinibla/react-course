import React from "react";
import Navbar from "./components/Navbar";
import Trip from "./components/Trip";
import tripData from "./data";

export default function App() {
  const data = tripData.map((item) => {
    return <Trip key={item.id} {...item} />;
  });
  return (
    <>
      <div className="container">
        <Navbar />
        <section className="trips--container">{data}</section>
      </div>
    </>
  );
}

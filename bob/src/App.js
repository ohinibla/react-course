import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Data from "./data";

export default function App() {
  const data = Data.map((item) => {
    return <Card key={item.key} {...item} />;
  });
  return (
    <>
      <Navbar />
      <Hero />
      <section className="cards--list">{data}</section>
    </>
  );
}

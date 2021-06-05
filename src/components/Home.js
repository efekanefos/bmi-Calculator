import React from "react";
import Navbar from "./Navbar";
import CalculateBMI from "./CalculateBMI";
import "../App.css";

function Home() {
  return (
    <div>
      <Navbar />
      <h1 className="text-center my-3">Calculate Your Body Index</h1>
      <CalculateBMI />
    </div>
  );
}

export default Home;

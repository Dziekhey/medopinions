import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import LocationSlider from "../sections/LocationSlider";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LocationSlider />
    </>
  );
};

export default HomePage;

import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/home-sections/Hero";
import LocationSlider from "../sections/home-sections/LocationSlider";
import PopularHospitals from "../sections/home-sections/PopularHospitals";
import TopHospitals from "../sections/home-sections/TopHospitals";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <LocationSlider />
      <PopularHospitals />
      <TopHospitals />
    </>
  );
};

export default HomePage;

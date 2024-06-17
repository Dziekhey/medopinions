import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../sections/home-sections/Hero";
import LocationSlider from "../sections/home-sections/LocationSlider";
import PopularHospitals from "../sections/home-sections/PopularHospitals";
import TopHospitals from "../sections/home-sections/TopHospitals";
import Footer from "../components/Footer";

const HomePage = () => {

  const emojis = [
    { name: "Excellent", value: "😍", number: 5 },
    { name: "Good", value: "😄", number: 4 },
    { name: "Average", value: "🙂", number: 3 },
    { name: "Poor", value: "😞", number: 2 },
    { name: "Terrible", value: "😠", number: 1 }
];

  return (
    <>
      <Navbar />
      <Hero />
      <LocationSlider />
      <PopularHospitals emojis={emojis} />
      <TopHospitals emojis={emojis} />
      <Footer />
    </>
  );
};

export default HomePage;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import IntroDetails from "../sections/details-sections/IntroDetails";
import ListReview from "../sections/details-sections/ListReview";
import { useParams } from "react-router-dom";
import useSWR from "swr";
import Footer from "../components/Footer";

const DetailsPage = () => {
  const emojis = [
    { name: "Excellent", value: "😍", number: 5 },
    { name: "Good", value: "😄", number: 4 },
    { name: "Average", value: "🙂", number: 3 },
    { name: "Poor", value: "😞", number: 2 },
    { name: "Terrible", value: "😠", number: 1 },
  ];

  const getHospital = (...args) => {
    // Prepare url
    const url = new URL(args[0]);
    return fetch(url).then((response) => response.json());
  };

  const { id } = useParams();
  const { data } = useSWR(
    `${import.meta.env.VITE_APP_API_URL}/hospitals/${id}`,
    getHospital
  );

  return (
    <>
      <Navbar />
      <div className="m-10">
        {data && <IntroDetails emojis={emojis} hospital={data} />}
      </div>
      <div className="m-10">
        {data && <ListReview emojis={emojis} hospital={data} />}
      </div>
      <Footer />
    </>
  );
};

export default DetailsPage;

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import IntroDetails from "../sections/details-sections/IntroDetails";
import ListReview from "../sections/details-sections/ListReview";

const DetailsPage = () => {
  return (
    <>
      <Navbar />
      <div className="m-10">
        <IntroDetails />
      </div>
      <div className="m-10">
        <ListReview />
      </div>
    </>
  );
};

export default DetailsPage;

import React from "react";
import { useLocation } from "react-router-dom";
import useQueryHospitals from "../hooks/useQueryHospitals";
import HospitalCard from "../components/HospitalCard";
import { emojis } from "../data/Reviews";
import Navbar from "../components/Navbar";
import LocationSlider from "../sections/home-sections/LocationSlider";
import Footer from "../components/Footer";

const HospitalsPage = () => {
  const { loading, hospitals = [] } = useQueryHospitals();
  const location = useLocation();

  const searchResults = location.state?.searchedHospitals || location.state?.filteredLocation || hospitals;

  return (
    <>
      <Navbar />
      <div className="p-4">
        <div>
          <LocationSlider />
        </div>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : searchResults.length === 0 ? (
          <p className="text-center">No hospitals found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {searchResults.map((hospital) => (
              <HospitalCard
                emojis={emojis}
                key={hospital.id}
                hospital={hospital}
              />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default HospitalsPage;

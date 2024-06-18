import React from "react";
import HospitalCard from "../../components/HospitalCard";
import useQueryHospitals from "../../hooks/useQueryHospitals";

const PopularHospitals = ({ emojis }) => {
  const { loading, hospitals } = useQueryHospitals();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hospitals || hospitals.length === 0) {
    return <p>No hospitals found</p>;
  }

  const popularHospitals = (hospitals) => {
    return hospitals.filter((hospital) => hospital.reviews.length >= 6);
  };

  return (
    <>
      <section className="px-6 py-10">
        <div>
          <h1 className="custom_line relative font-semibold text-xl">
            Check reviews on some popular hospitals
          </h1>
        </div>
        <div className="pt-14 gap-4 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {popularHospitals(hospitals).map((hospital) => (
            <HospitalCard emojis={emojis} key={hospital.id} hospital={hospital} />
          ))}
        </div>
      </section>
    </>
  );
};

export default PopularHospitals;

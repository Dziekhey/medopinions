import React from "react";
import HospitalCard from "../../components/HospitalCard";
import useQueryHospitals from "../../hooks/useQueryHospitals";

const TopHospitals = ({ emojis }) => {
  const { loading, hospitals } = useQueryHospitals();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!hospitals || hospitals.length === 0) {
    return <p>No hospitals found</p>;
  }

  // Function to calculate average rating for a hospital
  const calculateAverageRating = (reviews) => {
    if (reviews.length === 0) return 0;

    const totalRating = reviews.reduce((acc, review) => {
      // Find the corresponding emoji number for the review rating
      const emojiNumber =
        emojis.find((emoji) => emoji.name === review.rating)?.number || 0;
      return acc + emojiNumber;
    }, 0);

    return parseInt(totalRating / reviews.length);
  };

  // Get hospitals where average rating === 5 (Excellent)
  const topRatedExcellentHospitals = hospitals.filter((hospital) => {
    const averageRating = calculateAverageRating(hospital.reviews);
    return averageRating === 4 || 5; // Assuming 5 corresponds to "Excellent" in your emojis array
  });

  return (
    <>
      <section className="p-10">
        <div>
          <h1 className="custom_line relative font-semibold text-xl">
            Here are some highly rated hospitals
          </h1>
        </div>
        <div className="pt-14 gap-4 justify-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {topRatedExcellentHospitals.map((hospital) => (
            <HospitalCard
              emojis={emojis}
              key={hospital.id}
              hospital={hospital}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default TopHospitals;

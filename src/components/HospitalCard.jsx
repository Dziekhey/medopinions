import React from "react";
import sample from "../assets/hero.png";
import { Link } from "react-router-dom";

const HospitalCard = ({ hospital, emojis }) => {

const getRatingNumber = (rating) => {
  const emoji = emojis.find(emoji => emoji.name === rating);
  return emoji ? emoji.number : 0;
};

const getAverageRating = (reviewArray) => {
  if (reviewArray.length === 0) return 0;

    const totalRating = reviewArray.reduce((sum, review) => {
        return sum + getRatingNumber(review.rating);
    }, 0);

    const averageNumber = parseInt(totalRating / reviewArray.length);
    const emoji = emojis.find(emoji => emoji.number === averageNumber);
    return [emoji.value, emoji.name]
     
};

  const getTotalReview = (reviews) => {
    let total = reviews.length;
    return total;
  }

  return (
    <>
      {hospital && (
        <Link to={`/hospital/${hospital._id}`}>
          <div className="flex item-center justify-between hover:scale-110 translate-x-2 duration-75 bg-light_grey shadow-md lg:w-[25rem] px-3 py-2">
            <div className="flex items-center lg:gap-5">
              <img
                src={sample}
                alt="Menu Image"
                className="w-[7rem] h-[7rem] object-cover"
              />
              <div className="space-y-1 pl-3 lg:max-w-2xl">
                <p className="font-semibold text-xl">{hospital.name}</p>
                <p>{getAverageRating(hospital.reviews)}</p>
                <span className="text-blue">({getTotalReview(hospital.reviews)} reviews)</span>
                <p>{hospital.region}{' '}Region,{' '}{hospital.city}</p>
              </div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default HospitalCard;

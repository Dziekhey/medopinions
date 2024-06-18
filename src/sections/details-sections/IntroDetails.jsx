import React from "react";
import sample from "../../assets/clinic.png";

const IntroDetails = ({ hospital, emojis }) => {
  const getRatingNumber = (rating) => {
    const emoji = emojis.find((emoji) => emoji.name === rating);
    return emoji ? emoji.number : 0;
  };

  const getAverageRating = (reviewArray) => {
    if (reviewArray.length === 0) return 0;

    const totalRating = reviewArray.reduce((sum, review) => {
      return sum + getRatingNumber(review.rating);
    }, 0);

    const averageNumber = parseInt(totalRating / reviewArray.length);
    const emoji = emojis.find((emoji) => emoji.number === averageNumber);
    return [emoji.value, emoji.name];
  };

  const getTotalReview = (reviews) => {
    let total = reviews.length;
    return total;
  };

  const calculatePercentage = (count, total) =>
    total === 0 ? 0 : (count / total) * 100;

  return (
    <>
      <section className="bg-light_grey shadow-sm w-full rounded-lg px-3 py-2">
        <div className="lg:flex items-center justify-between ">
          <div className="lg:flex items-center lg:gap-5">
            <img
              src={sample}
              alt="Menu Image"
              className="h-60 w-60 object-cover"
            />
            <div className="space-y-3 pl-3 lg:max-w-2xl">
              <p className="font-semibold text-blue text-3xl">
                {hospital.name}
              </p>
              <p className="text-2xl">
                {hospital.region} Region, {hospital.city}
              </p>
              <div className="flex space-x-3">
                <p className="text-xl">{getAverageRating(hospital.reviews)}</p>
                <p className="pt-1 text-blue">
                  ({getTotalReview(hospital.reviews)} reviews)
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:flex lg:w-[410px]">
            <div className="space-y-5 justify-center ml-5 flex flex-col items-center lg:mt-0 mt-5">
              {emojis.map((emoji) => {
                const reviewsWithEmoji = hospital.reviews.filter(
                  (review) => review.rating === emoji.name
                );
                const reviewCount = reviewsWithEmoji.length;
                const percentage = calculatePercentage(
                  reviewCount,
                  hospital.reviews.length
                );

                return (
                  <div
                    className="flex h-3 flex-row items-center"
                    key={emoji.name}
                  >
                    <div className="w-24">
                      <p className="w-full text-sm">{`${emoji.name} ${emoji.value}`}</p>
                    </div>
                    <div className="w-[200px] rounded-xl bg-zinc-400 h-2 mx-2">
                      <div
                        className="h-2 rounded-xl bg-blue"
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>
                    </div>
                    <div>
                      <p className="ml-2 text-sm">{`${reviewCount} reviews`}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IntroDetails;

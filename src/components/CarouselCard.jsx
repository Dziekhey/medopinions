import React from "react";

const CarouselCard = ({ image, title }) => {
  return (
    <>
      <div className="flex flex-col justify-center items-center">
        <img
          src={image}
          alt=""
          className="size-[4rem] lg:size-[12rem] rounded-full object-cover object-center"
        />
        <span className="py-5 font-semibold text-xs lg:text-xl">{title}</span>
      </div>
    </>
  );
};

export default CarouselCard;

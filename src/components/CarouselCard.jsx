import React from "react";

const CarouselCard = ({ image, title, bgcolor, handleFilter }) => {
  return (
    <div
      className="flex flex-col justify-center items-center p-2 cursor-pointer"
      onClick={() => handleFilter(title)}
    >
      <div
        className="flex flex-col justify-center items-center p-4 rounded-full transition duration-300"
      >
        <img
          src={image}
          alt={title}
          className="h-16 w-16 lg:h-32 lg:w-32 rounded-full object-cover object-center"
        />
        <span style={{color: bgcolor}} className="pt-3 font-semibold text-xs lg:text-xl">{title}</span>
      </div>
    </div>
  );
};

export default CarouselCard;

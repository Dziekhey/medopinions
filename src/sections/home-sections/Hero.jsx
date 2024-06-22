import React from "react";
import hero from '../../assets/hero.png';
import Searchbar from "../../components/Searchbar";

const Hero = () => {
  return (
    <>
      <section className="h-48 md:h-72 lg:h-96 relative">
        <div className="h-full relative">
          <img
            src={hero}
            alt="Hospital building"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute bg-black bg-opacity-50 inset-0 flex flex-col justify-center items-center">
          <div className="pb-5 md:pb-8 lg:pb-8">
            <h1 className="text-white text-md px-3 font-bold md:text-xl lg:text-3xl">
              Empower your healthcare choices with insightful reviews for
              better care.
            </h1>
          </div>
          <div className="w-full px-3 flex justify-center">
            <Searchbar />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

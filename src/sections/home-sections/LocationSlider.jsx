import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { regions } from "../../data/Location";
import CarouselCard from "../../components/CarouselCard";

const LocationSlider = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <section className="p-10">
        <div>
          <h1 className="custom_line relative font-semibold text-xl">
            Find hospitals in the various regions in Ghana
          </h1>
        </div>
        <div className="pt-10">
          <Slider {...settings}>
            {regions.map((region, index) => (
              <CarouselCard
                image={region.image}
                title={region.name}
                key={index}
              />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default LocationSlider;

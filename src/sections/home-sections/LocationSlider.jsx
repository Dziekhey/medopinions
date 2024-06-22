import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { regions } from "../../data/Location";
import CarouselCard from "../../components/CarouselCard";
import useQueryHospitals from "../../hooks/useQueryHospitals";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mui/material";

const LocationSlider = () => {

  const isSmallScreen = useMediaQuery("(max-width:580px)");

  const settings = {
    dots: isSmallScreen ? false : true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 950, 
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 505,
        settings: {
          slidesToShow: 2,
        },
      },
    ]
  };

  const [selectedRegion, setSelectedRegion] = useState('');
  const { loading, hospitals } = useQueryHospitals();
  const navigate = useNavigate();

  const handleFilter = (title) => {
    if (loading) {
      return <p>Loading...</p>;
    }

    try {
      setSelectedRegion(title);
      const filteredLocation = hospitals.filter((hospital) => {
        return hospital?.region.toLowerCase().includes(title.toLowerCase());
      });

      navigate("/searched-hospitals", {
        state: { filteredLocation },
      });
    } catch (error) {
      console.log(error);
    }
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
                bgcolor={selectedRegion === region.name ? '#189cdf' : ''}
                handleFilter={() => handleFilter(region.name)}
              />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default LocationSlider;

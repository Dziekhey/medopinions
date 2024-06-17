import React from "react";
import logo from "../assets/croppedlogo.png";
import { navigations } from "../data/Navlinks";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  return (
    <>
      <section className="h-20 bg-light_grey flex justify-between bg-opacity-75 sticky top-0 z-50">
        <Link to="/">
          <div>
            <img
              src={logo}
              alt="MedOpinions"
              className="h-64 w-64 object-contain pb-40"
            />
          </div>
        </Link>
        {location.pathname === "/searched-hospitals" && (
          <div className="w-[500px] pt-2">
            <Searchbar />
          </div>
        )}
        <div className="flex items-center">
          {navigations.map((navigation, index) => (
            <Link to={`${navigation.route}`}>
              <div className="flex pt-3" key={index}>
                <h1 className="px-10 font-semibold">{navigation.title}</h1>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Navbar;

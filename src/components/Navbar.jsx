import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/croppedlogo.png";
import { navigations } from "../data/Navlinks";
import Searchbar from "./Searchbar";
import { useAuth } from "../services/AuthProvider";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const { logOut } = useAuth();
  const token = localStorage.getItem("token");

  return (
    <>
      <section className="h-20 bg-light_grey flex justify-between sticky top-0 z-50">
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
          <div className="flex items-center">
            {navigations.map((navigation, index) => (
              <Link
                to={`${navigation.route}`}
                key={index}
                onClick={() => setActive(navigation.route)}
              >
                <div
                  style={
                    active === navigation.route
                      ? { color: "#0A73B0" }
                      : { color: "" }
                  }
                  className="flex pt-3"
                >
                  <h1 className="px-10 font-semibold">{navigation.title}</h1>
                </div>
              </Link>
            ))}
          </div>
          {token ? (
            <Link onClick={logOut}>
              <div className="flex pt-3">
                <h1 className="px-10 font-semibold">Log Out</h1>
              </div>
            </Link>
          ) : (
            <Link to="/sign_in">
              <div className="flex pt-3">
                <h1 className="px-10 font-semibold">Sign in</h1>
              </div>
            </Link>
          )}
        </div>
      </section>
    </>
  );
};

export default Navbar;

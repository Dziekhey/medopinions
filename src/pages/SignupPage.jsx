import React, { useState } from "react";
import "./SignupPage.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const SignupPage = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const Signup = async (event) => {
    // Prevent default form submit behavior
    event.preventDefault();
    // Get form data

    try {
      // Post form data to the backend
      const response = await fetch(
        `${import.meta.env.VITE_APP_API_URL}/register`,
        {
          method: "POST",
          body: JSON.stringify({
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log(response);
      if (response.status !== 201) {
        const data = await response.json();
        toast.error(data.errorMsg);
      } else {
        toast.success("Sign up was successful");
        navigate("/sign_in");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
    <Navbar />
      <div className="signup-display">
        <div className="signup-wrapper">
          <form action="">
            <h1>Sign Up</h1>
            <div className="signup-input-box">
              <input
                type="text"
                name="first_name"
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                required
              />
            </div>
            <div className="signup-input-box">
              <input
                type="text"
                name="last_name"
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                required
              />
            </div>
            <div className="signup-input-box">
              <input
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
              />
            </div>
            <div className="signup-input-box">
              <input
                type="password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
              />
            </div>
              <button className="signup-button" type="submit" onClick={Signup}>
                Sign Up
              </button>
            <div className="login-container">
              <p>Already have an account?</p>
              <Link to="/sign_in">
                <p className="login-link">Login</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignupPage;

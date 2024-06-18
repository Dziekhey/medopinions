import React, { useState, createContext, useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'; // Add this import

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const navigate = useNavigate(); // Initialize the navigate function

  const loginAction = async (data) => {
    try {
      const response = await fetch(`${import.meta.env.VITE_APP_API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status !== 202) {
        const data = await response.json();
        toast.error(data.errorMsg);
      } else {
        const res = await response.json();
        if (res) {
          setUser(res.user);
          setToken(res.token);
          localStorage.setItem("token", res.token); 
          localStorage.setItem("first_name", res.user.first_name); 
          localStorage.setItem("last_name", res.user.last_name);
          localStorage.setItem("email", res.user.email);
          localStorage.setItem("id", res.user._id);
          toast.success("Login was successful");
          navigate("/");
          return;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("email");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    navigate("/sign_up");
  };

  return (
    <AuthContext.Provider value={{ token, user, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;

import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const CustomNavBar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/"); // Navigate to the login page
  };
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
        <div className="n-name">CITID</div>
        <Toggle />
      </div>
      {/* right */}
      <div className="n-right">
        <div className="n-list">
          
        </div>
        <a onClick={handleHome} spy={true} smooth={true}>
        <button className="button n-button">Home</button>
        </a>
      </div>
    </div>
  );
};

export default CustomNavBar;

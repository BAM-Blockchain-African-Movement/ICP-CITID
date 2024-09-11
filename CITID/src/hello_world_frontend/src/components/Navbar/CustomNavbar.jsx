import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../../img/citidlogo1.png'
const CustomNavBar = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/"); // Navigate to the login page
  };
  return (
    <div className="n-wrapper" id="Navbar">
      {/* left */}
      <div className="n-left">
      <img src={logo} alt="" style={{height:'170px'}}/>
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

import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import logo from '../../img/citidlogo.png'

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login"); // Navigate to the login page
  };

  const handleRegistration = () => {
    navigate("/Register"); // Navigate to the login page
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
          <ul style={{ listStyleType: "none" }}>
            <li>
              <Link activeClass="active" to="Navbar" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
            <a onClick={handleLogin} >
                Login
              </a>
            </li>
            <li>
            <a onClick={handleRegistration}>
                Register
              </a>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true}>
              Services
              </Link>
            </li>
            <li>
              <Link to="works" spy={true} smooth={true}>
                Trends
              </Link>
            </li>
           
          </ul>
        </div>
        <Link to="contact" spy={true} smooth={true}>
        <button className="button n-button">Contact</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

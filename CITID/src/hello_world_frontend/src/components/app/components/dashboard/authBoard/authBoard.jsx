import React from "react";
import './authBoard.css';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Toggle from "../../../../Toggle/Toggle";
import logo from '../../../../../img/citidlogo1.png';
const AuthBoard = () =>{
  const navigate = useNavigate();

  const handleVerifyid = () => {
    navigate("/verifyid"); // Navigate to the login page
  };
  const handleRegistration = () => {
    navigate("/Register"); // Navigate to the login page
  };

   return(
    <div className="n-wrapper" id="Navbar">
    {/* left */}
    <div className="n-left">
    <img src={logo} alt="CITID" style={{height:'170px'}}/>
      <Toggle />
    </div>
    {/* right */}
    {/* <div className="n-right">
      <div className="n-list">
        <ul style={{ listStyleType: "none" }}>
        </ul>
      </div>
    </div> */}
    <div className="row">
      <button className="col-md-3 button" onClick={handleRegistration}>Create card</button>
      <button className="col-md-3 button" onClick={handleVerifyid}>Verify card</button>
    </div>
  </div>

   );
}

export default AuthBoard;
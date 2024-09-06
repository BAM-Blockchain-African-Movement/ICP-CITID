import React, { useContext } from "react";
import { themeContext } from "../../../Context";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./verification.css";
const Verification = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const navigate = useNavigate();

    const handleclickHome = () => {
      navigate("/"); // Navigate to the login page
    };
    return(
        <div className="Intro">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" , fontSize:"40px"}}>Verification running...</span>
            <span style={{fontSize:"25px"}}>Please be patient we are verifying your document, an email will be sent to you
            containing your authentication code.</span>
            <button className="button i-button" style={{width:"250px"}} onClick={handleclickHome}>
            Back home
          </button>
          <br />
          <br />
          <span style={{ color: darkMode ? "white" : "" , fontSize:"18px"}}>
              CITID Your platform for numerical Identity card creation and management
            </span>
          </div>
          
        </div>
    );
}

export default Verification;
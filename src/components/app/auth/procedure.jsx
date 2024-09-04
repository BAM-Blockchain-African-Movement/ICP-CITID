import React, { useContext } from "react";
import "./procedure.css";
import { themeContext } from "../../../Context";
import { useNavigate } from "react-router-dom"; // Import useNavigate
const Procedure = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  // Use useNavigate hook
  const navigate = useNavigate();

  const handleGetMyDidClick = () => {
    navigate("/verification"); // Navigate to the login page
  };
    return(
        <div className="contact-form" id="contact">
        {/* Left side */}
        <div className="w-left">
          <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '' }}>Lunch procedure</span>
            <span>Doc registration</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
        </div>
        {/* Right side form */}
        <div className="c-right">
          <form >
            <input type="text" name="from_name" className="user" placeholder="Name" required />
            <input type="email" name="to_name" className="user" placeholder="Email" required />
            <input type="file" name="bcretificate" className="user" placeholder="Select certificate" required/>
            <input type="submit" value="Send" className="button" onClick={handleGetMyDidClick} />
            <div
              className="blur c-blur1"
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
    );

};

export default Procedure;
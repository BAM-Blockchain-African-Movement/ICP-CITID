import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>82+</div>
        <span  style={{color: darkMode?'white':''}}>millions</span>
        <span>Blockchain users in the world</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>10+</div>
        <span  style={{color: darkMode?'white':''}}>users</span>
        <span>Registered</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}>100+</div>
        <span  style={{color: darkMode?'white':''}}>companies </span>
        <span>Adopte blockchain in Africa</span>
      </div>
    </div>
  );
};

export default Experience;

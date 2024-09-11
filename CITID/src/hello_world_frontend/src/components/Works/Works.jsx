import React, { useContext } from "react";
import "./Works.css";
import card from "../../img/s1.png";
import Travel from "../../img/s3.png";
import blockchain from "../../img/s5.png";
import verified from "../../img/s2.png";
import lock from "../../img/s4.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>
            Works for All these
          </span>
          <span>Resilience & <br /> availability</span>
          <span>
          Identity data is stored on multiple nodes,
          <br /> thus improving the overall resilience and availability of the system.
          <br />
          <br />immutability ensures that identity data cannot be  
          <br />modified without detection, thus providing a tamper-proof record 
          <br />identity information about an individual. 
          <br />
          <br />
          This decentralized approach eliminates the risk of a single point of failure 
          <br /> unique and reduces vulnerability to hacking or unauthorized access.
          </span>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={card} alt="" height={200} />
          </div>
          <div className="w-secCircle">
            <img src={Travel} alt="" height={200} />
          </div>
          <div className="w-secCircle">
            <img src={blockchain} alt="" height={200} />
          </div>{" "}
          <div className="w-secCircle">
            <img src={verified} alt="" height={200} />
          </div>
          <div className="w-secCircle">
            <img src={lock} alt="" height={200} />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;

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
          Les données d'identité sont stockées sur plusieurs nœuds,
          <br /> améliorant ainsi la résilience et la disponibilité globales du système.
          <br />
          <br />immuabilité garantit que les données d'identité ne peuvent pas être  
          <br />modifiées sans détection, fournissant ainsi un enregistrement infalsifiable 
          <br />des informations d'identité d'un individu. 
          <br />
          <br />
          Cette approche décentralisée élimine le risque d'un point de défaillance 
          <br /> unique et réduit la vulnérabilité au piratage ou à l'accès non autorisé.
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

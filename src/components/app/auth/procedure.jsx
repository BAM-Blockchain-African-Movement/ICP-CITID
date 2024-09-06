import React, { useContext, useState } from "react";
import "./procedure.css";
import { themeContext } from "../../../Context";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Tesseract from 'tesseract.js';
const Procedure = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  // Use useNavigate hook
  const navigate = useNavigate();

  const handleGetMyDidClick = () => {
    navigate("/verification"); // Navigate to the login page
  };

  const [image, setImage] = useState(null);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // New state for status

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const extractText = () => {
    if (!image) return;

    setLoading(true);
    Tesseract.recognize(
      image,
      'eng',
      {
        logger: (m) => console.log(m), // Optional: log progress
      }
    ).then(({ data: { text } }) => {
      setText(text);
      checkForSpecificTexts(text);
      setLoading(false);
      
    }).catch((error) => {
      console.error(error);
      setLoading(false);
    });
  };

  const checkForSpecificTexts = (extractedText) => {
    const textsToCheck = [
      "Timbre Fiscal-Fiscal Stamp",
      "Timbre communal",
      "copie certifier conforme"
    ];
    
    const found = textsToCheck.some(item => extractedText.includes(item));
    
    if (found) {
      setStatus(200); // Set status to 200 if found
    } else {
      setStatus(404); // Set status to 404 if not found
    }
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
            <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      <button className="button" onClick={extractText} disabled={loading}>
        {loading ? 'Processing...' : 'Verify'}
      </button>
      {text && (
        <div>
          <p>Scan</p>
        </div>
      )}
      {status !== null && (
        <div>
          <h2>Status:</h2>
          <p>{status === 200 ? 'Good (200)' : 'Bad (404)'}</p>
        </div>
      )}
      {/* {status !== null && (<button onClick={status === 200 ? handleGetMyDidClick  : "" } className="button">Submit</button>)} */}
    </div>
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
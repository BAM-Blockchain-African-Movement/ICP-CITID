import React, { useContext, useState } from "react";
import "./procedure.css";
import { themeContext } from "../../../Context";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import Tesseract from 'tesseract.js';
import { hello_world_backend } from '../../../../../declarations/hello_world_backend';

const Procedure = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Use useNavigate hook
  const navigate = useNavigate();

  // const handleGetMyDidClick = () => {
  //   navigate("/verification"); // Navigate to the login page
  // };

  // const [image, setImage] = useState(null);
  // const [text, setText] = useState('');
  // const [loading, setLoading] = useState(false);
  // const [status, setStatus] = useState(null); // New state for status

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  // const extractText = () => {
  //   if (!image) return;

  //   setLoading(true);
  //   Tesseract.recognize(
  //     image,
  //     'eng',
  //     {
  //       logger: (m) => console.log(m), // Optional: log progress
  //     }
  //   ).then(({ data: { text } }) => {
  //     setText(text);
  //     checkForSpecificTexts(text);
  //     setLoading(false);
      
  //   }).catch((error) => {
  //     console.error(error);
  //     setLoading(false);
  //   });
  // };

  // const checkForSpecificTexts = (extractedText) => {
  //   const textsToCheck = [
  //     "Timbre Fiscal-Fiscal Stamp",
  //     "Timbre communal",
  //     "copie certifier conforme"
  //   ];
    
  //   const found = textsToCheck.some(item => extractedText.includes(item));
    
  //   if (found) {
  //     setStatus(200); // Set status to 200 if found
  //   } else {
  //     setStatus(404); // Set status to 404 if not found
  //   }
  // };

  const [role, setRole] = useState("Citizen");
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [doc, setDoc] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState('');
// Function to get current date and time
const getCurrentDateTime = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Month is 0-indexed
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
};

  function handleSubmit(event) {

    event.preventDefault();
    const nameName = event.target.elements.name.value;
    const emailName = event.target.elements.email.value;
    const docName = event.target.elements.doc.value;
    const passwordName = event.target.elements.password.value;
    const dateName = getCurrentDateTime();

    // Assuming 'hello_world_backend' is a global object or a function
    // Replace with your actual backend function call
    hello_world_backend.createUser( role, nameName,emailName,docName ,passwordName, dateName)
      .then((result) => {
        // Handle the result returned from Motoko function

        if(result){
          // getSession(result.id);
          // alert("User created successfull");
          navigate("/verification");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        // Handle errors appropriately, e.g., display an error message to the user
      });

    return false;
  }

  return (
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
        <form action="#" onSubmit={handleSubmit}>
          <input type="text" name="name" className="user" placeholder="Name" id="name" required />
          <input type="email" name="email" className="user" placeholder="Email" id="email" required />
          <input type="password" name="password" className="user" placeholder="password" id="password" required />
          <input type="text" name="doc" id="doc" className="user" />
          <button type="submit" className="button">Submit</button>
          <div>
            {/* <input type="file" className="user" accept="image/*" id="doc" onChange={handleImageChange} />
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
                <p>{status === 200 ? '<button className="button" type="submit">Submit</button>' : 'Bad (404)'}</p>
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
// export const getSession = (id) =>{
//   return id;
//   }
export default Procedure;




import React, { useContext, useState } from "react";
import { themeContext } from "../../../../Context";
import "./login.css";
import image from '../../../../img/login.jpg'
import logo from '../../../../img/citidlogo1.png'
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { hello_world_backend } from '../../../../../../declarations/hello_world_backend';
// import {getSession} from '../procedure';

const Login = () => {
  const navigate = useNavigate();
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const emailName = event.target.elements.email.value;
    const passwordName = event.target.elements.password.value;
    // let uid = getSession;
    // alert(uid);
    hello_world_backend.userRole(emailName, passwordName)
      .then((result) => {
        // Handle the result returned from Motoko function
        if (result === "dashboard/citizen") {
          navigate("/myid");
        } else if (result === "dashboard/authority") {
          navigate("/test");
        } else if (result === "dashboard/government") {
          navigate("/dashboard/government");
        } else {
          // Handle other responses (e.g., "Not authorised", "User not found")
          alert(result); // Display the error message from Motoko
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        // Handle errors appropriately, e.g., display an error message to the user
      });

    return false;
  }

  return (
    <div className="contain">
      <div className="color ">
        <img src={logo} height={200} alt="" />
        <img src={image} alt="" />
      </div>
      <div className="form">
        <form action="#" onSubmit={handleSubmit}>
          <span style={{ color: darkMode ? 'white' : '', fontWeight: 'bold', fontSize: "25px", textAlign: "center" }}>CITID LOGIN</span>
          <hr />
          <label htmlFor="email">Email</label>
          <input style={{ fontSize: "14px", height: '20px' }} className="user form-control" type="text" placeholder="Entrer votre email" id="email" alt="email" />

          <label htmlFor="password">Mot de passe</label>
          <input style={{ fontSize: "14px", height: '20px' }} className="user form-control" type="password" placeholder="Entrer votre mot de passe" id="password" alt="password" />

          {/* <label for="service">Service</label>
          <select  style={{fontSize:"14px", height5:'20px'}} className="form-select" name="service" id="service">
              <option value="0">Selectionnez votre service..</option>
          </select> */}
          <p className="forgotPass text-primary">Mot de passe oublié ?</p>
          <button className="button" type="submit">Se connecter</button>
          <hr />
          <p className="policy">By logging in, you accept the Terms of Use and acknowledge having read the Privacy Policy and the Cookie Management Policy.</p>
        </form>
      </div>

    </div>
  );
};

export default Login;
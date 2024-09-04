import React from "react";
import "./login.css";
import image from '../../../../img/login.jpg'
import logo from '../../../../img/citidlogo1.jpg'

const Login = () =>{


    return(
  <div className="contain">
    <div className="color ">
    <img src={logo} height={200} alt="" />
        <img src={image} alt=""/>
    </div>
        <div className="form">
           <form action="" method="">
            
                <h4 style={{fontWeight:'bold' }}>CITID LOGIN</h4>
                <hr/>
                <label for="email">Email</label>
                <input  style={{fontSize:"14px", height5:'20px'}} className="form-control" type="text" placeholder="Entrer votre email" id="email" />
                
                <label for="password">Mot de passe</label>
                <input  style={{fontSize:"14px", height5:'20px'}} className="form-control" type="password" placeholder="Entrer votre mot de passe" id="password"/>
              
                <label for="service">Service</label>
                <select  style={{fontSize:"14px", height5:'20px'}} className="form-select" name="service" id="service">
                    <option value="0">Selectionnez votre service..</option>
                </select>
                <p className="forgotPass text-primary">Mot de passe oublié ?</p>
                <button className="button" id="">Se connecter</button>
                <hr/>
                <p className="policy">En vous connectant, vous acceptez les Conditions d'utilisation et reconnaissez avoir pris connaissance de la Politique de confidentialité et de la Politique de gestion des cookies.</p>
           </form>
        </div>
        
   </div>
    );
}

export default Login;
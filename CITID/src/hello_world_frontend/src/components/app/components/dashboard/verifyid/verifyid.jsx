import React, { useContext, useState } from "react";
import { themeContext } from "../../../../../Context";
import './verifyid.css';
import chip from '../../../../../img/chip.png';
import flag from '../../../../../img/Flag_of_Cameroon.png';
import profile from '../../../../../img/profile5.jpg';
import { hello_world_backend } from "../../../../../../../declarations/hello_world_backend";

const VerifyId = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const [cardId, setCardId] = useState('');
    const [password, setPassword] = useState('');
    const [cardData, setCardData] = useState(null); // State to store card data
    const [error, setError] = useState(false); // State to track if the cardId is valid

    const verifyid = (event) =>{
        event.preventDefault();
        const cardIdName = event.target.elements.cardId.value;
        const cardIdPassword = event.target.elements.password.value;
        hello_world_backend.verifyId(cardIdPassword, cardIdName).then((result)=>{
            console.log(result);
            if (result == "Authentic Numeric Id, verified OK!") { // Check if there's data in the result
              setCardData(result); // Assuming the first element is the card data
              setError(false); // Reset error state
            } else {
              setCardData(null);
              setError(true); // Set error state if no card data is found
            }
        }).catch((error)=>{
            console.error("Error during login:", error);
            setCardData(null);
            setError(true);
        });
    }

    return (
        <div className="page">
            {/* Assuming MainBar is a component */}
            <div className="awesome">
                <span style={{ color: darkMode ? 'white' : '', fontSize:'30px'}}>Numerical National ID card verification</span>
                <span style={{fontSize:'20px'}}>Virtual preview</span>
                <div
                  className="blur s-blur1"
                  style={{ background: "#ABF1FF94" }}
                ></div>
            </div>
            <form onSubmit={verifyid}>
          <input type="email" id="cardId" className="user" placeholder="Email" required />
          <input type="password" id="password" className="user" placeholder="Card Password" required />
          <input type="submit" value="Verify" className="button" />
          <div
            className="blur c-blur1"
            style={{ background: "var(--purple)" }}
          ></div>
        </form>
           {cardData ? (
                <div className="sectionn containnner">
                    {/* Render the card template here, using cardData */}
                    <div className="cart front-face row" style={{background:"#0080007e"}}>
                        <div className="head-txt">
                        <h4 className="h4">REPUBLIQUE DU CAMEROUN</h4>
                        <h4 className="h4">REPUBLIC OF CAMEROON </h4>
                        </div>
                        <header className="log-box col-md-4">
                            <img src={flag} alt="" className="chip"/>
                            <img src={chip} alt="" className="chip" />
                            <img src={profile} alt="" className="profile" />
                        </header>
                        <div className="room col-md-4">
                        <section className="information1">
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    NOM/SURNAME
                                </label>
                                <p className="txt">
                                    ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    PRENOMS/GIVEN NAMES 
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                        </section>
                        <section className="information2">
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DATE DE NAISSANCE/DATE OF BIRTH
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    LIEU DE NAISSANCE/PLACE OF BIRTH
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="row">

                            <div className="datum col-md-6">
                                <label htmlFor="" className="lbl">
                                    SEXE/SEX
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum col-md-6">
                                <label htmlFor="" className="lbl">
                                    TAILLE/HEIGHT
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    PROFESSION/OCCUPATION
                                </label>
                                <p className="txt">
                                |||||||||||||||||||{/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    SIGNATURE
                                </label>
                                <p>|||||||||||||||||||</p>
                            </div>

                           
                        </section>
                        </div>
                        <div className="col-md-4">
                            <img src={profile} alt="" className="lg-profile" />
                        </div>
                    </div>
                    <div className="cart back-face" style={{background:"#0080007e"}}>
                        <div className="block-back">
                        <div className="start row">
                            <section className="info1-back col-md-4">
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    PERE/FATHER
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    MERE/MOTHER 
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    S.P/S.M
                                </label>
                                <p className="txt">
                                    000000 {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    ADRESSE/ADDRESS
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            </section>
                            <section className="info2-back col-md-8">
                                <div className="row">
                                <div className="col-md-4 datum">
                                <label htmlFor="" className="lbl">
                                    AUTORITE/AUTHORITY
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                              
                            </div>
                           
                            <div className="col-md-4 datum">
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DATE DE DELIVRANCE/DATE OF ISSUE
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DATE D'EXPIRATION/DATE OF EXPIRY
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                            </div>
                            <div className="col-md-4 datum">
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    IDENTIFIANT UNIQUE/UNIQUE IDENTIFIER
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DIVISION
                                </label>
                                <p className="txt">
                                ||||||||||||||||||| {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                            </div>
                                </div>
                            </section>
                            </div>
                            <div className="end">
                                <div className="">
                                <h3 className="e">CAMEROUN</h3>
                                <h3 className="e">CAMEROON</h3>
                                </div>
                                <div className="mt-1">
                                    <img src={profile} alt="" className="back-profile" />
                                    <p>|||||||||||||||||||</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : error ? (
                <div className="sectionn containnner">
                    <div className="cart front-face row" style={{background:"#ff76766c"}}>
                        <div className="head-txt">
                            <h4 className="h4">Invaild National Id cart(error)</h4>
                            <h4 className="h4">Invaild National Id cart(error)</h4>
                        </div>
                    </div>
                    <div className="cart back-face" style={{background:"#ff76766c"}}>
                        <div className="block-back">
                        <h4 className="h4">Invaild cart</h4>
                        </div>
                    </div>
                </div>
            ) : (
                // Display nothing when no info is entered
                null
            )}
        </div>
   );
};

export default VerifyId;
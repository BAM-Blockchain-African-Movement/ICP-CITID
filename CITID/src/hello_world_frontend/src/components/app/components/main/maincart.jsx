import React, { useContext, useState } from "react";
import { themeContext } from "../../../../Context";
import './maincart.css';
import chip from '../../../../img/chip.png';
import flag from '../../../../img/Flag_of_Cameroon.png';
import profile from '../../../../img/profile5.jpg'
import MainBar from "./mainbar";
import {hello_world_backend} from '../../../../../../declarations/hello_world_backend';

const MainCart = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const [cardId, setCardId] = useState('');
    const [cardData, setCardData] = useState(null); // State to store card data

    const [cardId1, setCardId1] = useState('');
    const [uid, setUid] = useState('');
    const [cardData1, setCardData1] = useState(null); // State to store card data

    const [cardId2, setCardId2] = useState('');
    const [uid1, setUid1] = useState('');
    const [cardData2, setCardData2] = useState(null); // State to store card data
    const [error, setError] = useState(false);
    function handleSubmit(event) {
      event.preventDefault();
      const cardIdName = event.target.elements.cardId.value;
      // let uid = getSession;
      // alert(uid);
      hello_world_backend.getCard(cardIdName)
        .then((result) => {
          // Handle the result returned from Motoko function
          console.log(result);
          if(result){for (let index = 0; index < result.length; index++) {
            let element = result[index];
            setCardData(element);
            setError(false)
          }}else{
            setError(true);
            setCardData(null);
        } // Set cardData to null on error}
          
        //   setCardData(result); // Update cardData state with the result
        })
        .catch((error) => {
            setError(true);
          console.error("Error during login:", error);
          // Handle errors appropriately, e.g., display an error message to the user
          setCardData(null); // Set cardData to null on error
        });

      return false;
    }

    function handleSubmit1(event) {
        event.preventDefault();
        const cardIdName = event.target.elements.cardId1.value;
        const uidName = event.target.elements.uid.value;
        // let uid = getSession;
        // alert(uid);
        hello_world_backend.shareIdCard(cardIdName, uidName)
          .then((result) => {
            // Handle the result returned from Motoko function
            console.log(result);
            setCardData1(result);
            // for (let index = 0; index < result.length; index++) {
            //   let element = result[index];
            //   setCardData(element);
            // }
          //   setCardData(result); // Update cardData state with the result
          })
          .catch((error) => {
            console.error("Error during login:", error);
            // Handle errors appropriately, e.g., display an error message to the user
            setCardData1(null);
            setCardData(null); // Set cardData to null on error
          });
  
        return false;
      }

      function handleSubmit2(event) {
        event.preventDefault();
        const cardIdName1 = event.target.elements.cardId2.value;
        const uidName1 = event.target.elements.uid1.value;
        // let uid = getSession;
        // alert(uid);
        hello_world_backend.revokeSharedCard(cardIdName1, uidName1)
          .then((result) => {
            // Handle the result returned from Motoko function
            console.log(result);
            setCardData2(result);
            setCardData1(null);
            // for (let index = 0; index < result.length; index++) {
            //   let element = result[index];
            //   setCardData(element);
            // }
          //   setCardData(result); // Update cardData state with the result
          })
          .catch((error) => {
            console.error("Error during login:", error);
            // Handle errors appropriately, e.g., display an error message to the user
            setCardData1(null);
            setCardData(null); // Set cardData to null on error
          });
  
        return false;
      }

    return (
        <div className="page">
            <MainBar/>
            <div className="awesome">
            <span style={{ color: darkMode ? 'white' : '', fontSize:'30px'}}>Numerical National ID card</span>
            <span style={{fontSize:'20px'}}>Virtual preview</span>
            <div
              className="blur s-blur1"
              style={{ background: "#ABF1FF94" }}
            ></div>
          </div>
          <div className="row" style={{padding: "0px"}}>
          <form className="col-md-4" action="#" onSubmit={handleSubmit} style={{padding: "0px"}}>
            <input className="user" placeholder="enter your card password" type="password" id="cardId" /><input type="submit" value="submit" />
          </form>
          <form className="col-md-4" action="#" onSubmit={handleSubmit1} style={{padding: "0px"}}>
          <input className="user" placeholder="enter your card password" type="password" id="cardId1" /><input className="user" placeholder="enter your email" type="password" id="uid" /><input type="submit" value="share" />
          </form>
          <form className="col-md-4" action="#" onSubmit={handleSubmit2} style={{padding: "0px"}}>
          <input className="user" placeholder="enter your card password" type="password" id="cardId2" /><input className="user" placeholder="enter your email" type="password" id="uid1" /><input type="submit" value="revoke" />
          </form>
          </div>
          {cardData1 != null ? (alert("Id shared to ledger")):(console.log("not shared"))}
          {cardData2 ? (alert("Id revoked from share") ):(console.log("shared"))}

          
            {/* Display the card container if cardData is available */}
            {cardData  ? (
                <div className="sectionn containnner">
                    {/* Render the card template here, using cardData */}
                    <div className="cart front-face row">
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
                                    {cardData.surname} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    PRENOMS/GIVEN NAMES 
                                </label>
                                <p className="txt">
                                    {cardData.name} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                        </section>
                        <section className="information2">
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DATE DE NAISSANCE/DATE OF BIRTH
                                </label>
                                <p className="txt">
                                    {cardData.date_of_birth} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    LIEU DE NAISSANCE/PLACE OF BIRTH
                                </label>
                                <p className="txt">
                                    {cardData.place_of_birth} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="row">

                            <div className="datum col-md-6">
                                <label htmlFor="" className="lbl">
                                    SEXE/SEX
                                </label>
                                <p className="txt">
                                    {cardData.sex} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum col-md-6">
                                <label htmlFor="" className="lbl">
                                    TAILLE/HEIGHT
                                </label>
                                <p className="txt">
                                    {cardData.height} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    PROFESSION/OCCUPATION
                                </label>
                                <p className="txt">
                                    {cardData.profession} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    SIGNATURE
                                </label>
                                <p>{cardData.signature}</p>
                            </div>

                           
                        </section>
                        </div>
                        <div className="col-md-4">
                            <img src={profile} alt="" className="lg-profile" />
                        </div>
                    </div>
                    <div className="cart back-face">
                        <div className="block-back">
                        <div className="start row">
                            <section className="info1-back col-md-4">
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    PERE/FATHER
                                </label>
                                <p className="txt">
                                    {cardData.father_name} {/* Replace with actual data from cardData */}
                                </p>
                            </div>
                            <div className="datum">
                                <label htmlFor="" className="lbl">
                                    MERE/MOTHER 
                                </label>
                                <p className="txt">
                                    {cardData.mother_name} {/* Replace with actual data from cardData */}
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
                                    {cardData.address} {/* Replace with actual data from cardData */}
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
                                    {cardData.authority} {/* Replace with actual data from cardData */}
                                </p>
                              
                            </div>
                           
                            <div className="col-md-4 datum">
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DATE DE DELIVRANCE/DATE OF ISSUE
                                </label>
                                <p className="txt">
                                    {cardData.date_of_issue} {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DATE D'EXPIRATION/DATE OF EXPIRY
                                </label>
                                <p className="txt">
                                    {cardData.date_of_expiry} {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                            </div>
                            <div className="col-md-4 datum">
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    IDENTIFIANT UNIQUE/UNIQUE IDENTIFIER
                                </label>
                                <p className="txt">
                                    {cardData.id} {/* Replace with actual data from cardData */}
                                </p>
                                </div>
                                <div className="datum">
                                <label htmlFor="" className="lbl">
                                    DIVISION
                                </label>
                                <p className="txt">
                                    {cardData.division} {/* Replace with actual data from cardData */}
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
                                    <p>272364050</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) :error ? (
                // Display "Not found" message if cardData is null
                <div className="not-found">
                    <p>Card not found</p>
                </div>
            ) :(null)}
        </div>
    );
};

export default MainCart;
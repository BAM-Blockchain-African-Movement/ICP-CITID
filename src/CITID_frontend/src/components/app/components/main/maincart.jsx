import React, { useContext } from "react";
import { themeContext } from "../../../../Context";
import './maincart.css';
import chip from '../../../../img/chip.png';
import flag from '../../../../img/Flag_of_Cameroon.png';
import profile from '../../../../img/profile5.jpg'
import MainBar from "./mainbar";

const MainCart = () =>{
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
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
            <div className="sectionn containnner">
                
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
                                MANYAMA
                            </p>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                PRENOMS/GIVEN NAMES 
                            </label>
                            <p className="txt">
                                YANNIS MIGUEL
                            </p>
                        </div>
                    </section>
                    <section className="information2">
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                DATE DE NAISSANCE/DATE OF BIRTH
                            </label>
                            <p className="txt">
                                30.06.2003
                            </p>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                LIEU DE NAISSANCE/PLACE OF BIRTH
                            </label>
                            <p className="txt">
                                BAMENDA
                            </p>
                        </div>
                        <div className="row">

                        <div className="datum col-md-6">
                            <label htmlFor="" className="lbl">
                                SEXE/SEX
                            </label>
                            <p className="txt">
                                M
                            </p>
                        </div>
                        <div className="datum col-md-6">
                            <label htmlFor="" className="lbl">
                                TAILLE/HEIGHT
                            </label>
                            <p className="txt">
                                1,77
                            </p>
                        </div>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                PROFESSION/OCCUPATION
                            </label>
                            <p className="txt">
                                ELEVE
                            </p>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                SIGNATURE
                            </label>
                            <p>||||||||||||||||||||||||||||||||||</p>
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
                                MANYAMA JOHN DOE
                            </p>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                MERE/MOTHER 
                            </label>
                            <p className="txt">
                                MANDANDE LEILA
                            </p>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                S.P/S.M
                            </label>
                            <p className="txt">
                                000000
                            </p>
                        </div>
                        <div className="datum">
                            <label htmlFor="" className="lbl">
                                ADRESSE/ADDRESS
                            </label>
                            <p className="txt">
                                DLA-BASSA
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
                                |||||||||||||||||
                            </p>
                          
                        </div>
                       
                        <div className="col-md-4 datum">
                            <div className="datum">
                            <label htmlFor="" className="lbl">
                                DATE DE DELIVRANCE/DATE OF ISSUE
                            </label>
                            <p className="txt">
                                26.09.19
                            </p>
                            </div>
                            <div className="datum">
                            <label htmlFor="" className="lbl">
                                DATE D'EXPIRATION/DATE OF EXPIRY
                            </label>
                            <p className="txt">
                                26.09.29
                            </p>
                            </div>
                        </div>
                        <div className="col-md-4 datum">
                            <div className="datum">
                            <label htmlFor="" className="lbl">
                                IDENTIFIANT UNIQUE/UNIQUE IDENTIFIER
                            </label>
                            <p className="txt">
                                |||||||||||||||||||||
                            </p>
                            </div>
                            <div className="datum">
                            <label htmlFor="" className="lbl">
                                DIVISION
                            </label>
                            <p className="txt">
                                LT13
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
        </div>
    );
};

export default MainCart;
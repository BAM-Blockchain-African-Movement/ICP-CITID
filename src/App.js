import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Services from "./components/Services/Services";
import Experience from "./components/Experience/Experience";
import Works from "./components/Works/Works";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Procedure from "./components/app/auth/procedure";
import Verification from "./components/app/components/verification";
import Register from "./components/app/auth/register/register";
import Login from "./components/app/auth/login/login";
import NotFound from "./components/app/components/notFound/notFound";
import { themeContext } from "./Context";
import "./App.css";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setLoading(true); // Show preloader when route changes

    const timer = setTimeout(() => {
      setLoading(false); // Hide preloader after 2 seconds
    }, 2000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]);

  return (
    <div
      className="App"
      style={{
        background: darkMode ? "#131a25" : "",
        color: darkMode ? "white" : "",
      }}
    >
      {loading ? (
        <div id="preloader">
          <div id="digimax-preloader" className="digimax-preloader">
            <div className="preloader-animation">
              <div className="spinner"></div>
              <div className="loader">
                <span data-text-preloader="C" className="animated-letters">C</span>
                <span data-text-preloader="" className="animated-letters"></span>
                <span data-text-preloader="I" className="animated-letters">I</span>
                <span data-text-preloader="" className="animated-letters"></span>
                <span data-text-preloader="T" className="animated-letters">T</span>
                <span data-text-preloader="" className="animated-letters"></span>
                <span data-text-preloader="I" className="animated-letters">I</span>
                <span data-text-preloader="" className="animated-letters"></span>
                <span data-text-preloader="D" className="animated-letters">D</span>
              </div>
              <p className="fw-5 text-center text-uppercase">Loading...</p>
            </div>
            <div className="loader-animation">
              <div className="row h-100">
                <div className="col-3 single-loader p-0">
                  <div className="loader-bg"></div>
                </div>
                <div className="col-3 single-loader p-0">
                  <div className="loader-bg"></div>
                </div>
                <div className="col-3 single-loader p-0">
                  <div className="loader-bg"></div>
                </div>
                <div className="col-3 single-loader p-0">
                  <div className="loader-bg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Intro />
              <Services />
              <Experience />
              <Works />
              <Contact />
              <Footer />
            </>
          } />
          <Route path="/Procedure" element={<Procedure />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </div>
  );
}

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Main;
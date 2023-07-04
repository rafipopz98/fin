// import React from 'react'
// import About from "./About";
import About from "./About";
import Footer from "./Footer";
import "./LandingPage.css";
import Section from "./Section";
// import Section from "./Section";
import { NavLink } from "react-router-dom";
function LandingPage() {
  return (
    <div className="LandingPage">
      <div className="lpfirst">
        <div className="imgs">
          <img
            src="https://png.pngtree.com/png-clipart/20200527/ourmid/pngtree-office-supplies-cartoon-stationery-green-calculator-png-image_2209437.jpg"
            alt=""
          />
        </div>
        <div className="smallcir1"></div>
        <div className="smallcir2"></div>
        <div className="smallcir3"></div>
        <div className="smallcir4"></div>

        <div className="circle"></div>
      </div>
      <div className="lpsecond">
        <div className="quote">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span>FinCalc</span>
          <br />
          Numbers that guide your financial growth
        </div>
        <div className="btn">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <a href="#mostused">

          <button   className="bttns">
            
            calculate
          </button>
          </a>
         
        </div>
      </div>
      {/* <About /> */}
      {/* <Section /> */}
      {/* <Footer /> */}
      {/* <About /> 
       <Section/> */}
    </div>
  );
}

export default LandingPage;

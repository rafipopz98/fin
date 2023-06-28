import "./Navbar.css";
// import React from "react";
import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navfirst">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>{/* <NavLink to="/calculators">Calculators</NavLink> */}</li>
          <li>Most used</li>

          <li>
            {/* <NavLink
            to="/about"           
            exact   
          > */}
            About
            {/* </NavLink> */}
          </li>
        </ul>
      </div>
      <div className="navsecond">MoneyMosaic</div>
      <div className="third">
        <ul>
          <li>Account</li>
          <li>sign in</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

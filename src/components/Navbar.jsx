import "./Navbar.css";
// import React from "react";
// import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navfirst">
        <ul>
          <li>
            Home
          </li>
          <li>
            Calculators
          </li>
          <li>
            Most used
          </li>
          <li>
            About us
          </li>
        </ul>
      </div>
      <div className="navsecond">
      MoneyMosaic
      </div>
      <div className="third">
        <ul>
            <li>
                Account
            </li>
            <li>
                sign in
            </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;

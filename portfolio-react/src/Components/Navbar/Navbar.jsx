import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Services</li>
        <li>Portfolio</li>
        <ul>Contact</ul>
      </ul>

      <div className="nav-connect">Connect with Me</div>
    </div>
  );
}

export default Navbar;

import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Nick Kotel, </span>UI/UX Designer
      </h1>
      <p>
        Excited about the opportunity to work as
        UI/UX designer 
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link"  offset={50} href="#contact">Connect with me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
      </p>
    </div>
  );
}

export default Hero;

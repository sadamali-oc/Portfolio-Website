import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
function Hero() {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Chamalka Obadage, </span>IT Undergraduate
      </h1>
      <p>
        Excited about the opportunity to work as a software engineer intern and
        UI/UX designer intern
        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className="anchor-link"  offset={50} href="#contact">Connect with me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
      </p>
    </div>
  );
}

export default Hero;

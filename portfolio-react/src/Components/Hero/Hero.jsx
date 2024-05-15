import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";

function Hero() {
  return (
    <div className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Chamalka Obadage, </span>IT Undergraduate
      </h1>
      <p>
        Excited about the opportunity to work as a software engineer intern and
        UI/UX designer intern
        <div className="hero-action">
          <div className="hero-connect">Connect with me</div>
          <div className="hero-resume">My Resume</div>
        </div>
      </p>
    </div>
  );
}

export default Hero;

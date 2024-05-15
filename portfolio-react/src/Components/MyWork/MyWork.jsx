import theme_pattern from "../../assets/theme_pattern.svg";
import React from "react";
import "./MyWork.css";

function MyWork() {
  return <div className="mywork">
    <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt=""/>
    </div>
    <div className="mywork-container">
        
    </div>
  </div>;
}

export default MyWork;

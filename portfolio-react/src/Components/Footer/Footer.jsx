import React from "react";
import "./Footer.css";
import footer_logo from "../../assets/footer_logo.svg";
import user_icon from "../../assets/user_icon.svg";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="" />
          <p>I am a developer from,dvjfb enfjfe efef</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <img src={user_icon} alt="" />
            <input type=" email" placeholder="Enter your email" />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
        <hr />
        <div className=" footer-bottom">
          <p className="footer-bottom-left">
            © 2024 Chamalka Sadamali. All rights are received
          </p>
          <div className="footer-botton-right">
            <p>Terms of services</p>

            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

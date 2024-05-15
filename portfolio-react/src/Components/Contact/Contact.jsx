import React from "react";
import "./Contact.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import mail_icon from "../../assets/mail_icon.svg";
import location_icon from "../../assets/location_icon.svg";
import call_icon from "../../assets/call_icon.svg";

export default function Contact() {
  return (
    <div id='contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h>Lets's talk</h>
          <p>I.m currently to take on new projects,so feel free to rech out</p>
          <div className="contact-details">
            <div className="contact-detail">
                <img src={mail_icon} alt=""/>
                <p>chamalkasandamali@gmailcom</p>
            </div>
            <div className="contact-detail">
            <img src={call_icon} alt=""/>
<p>+94 24 244 2345</p>
            </div>

            <div className="contact-detail">
            <img src={location_icon} alt=""/>
<p>South,Galle Road</p>
            </div>

          
          </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder="Enter your name"  name='name'/>
            <label htmlFor="">Your Email</label>
            <input type="email"  placeholder="Enter your email" name="email"/>
            <label htmlFor="">Write your message here</label>
<textarea name="message"  rows='8' placeholder="Enter your message"></textarea>
       
       <button  type='submit' className="contact-submit">Submit now </button>
        </form>
      </div>
    </div>
  );
}

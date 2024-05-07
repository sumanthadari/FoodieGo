import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.foodieGo} alt="" />
          <p>Footer of Foodigo App in this we will add many things </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>Home</ul>
          <ul>About us</ul>
          <ul>Delivery</ul>
          <ul>Privacy policy</ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-45-675</li>
            <li>contact@foodiego</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        {" "}
        Copyright 2024 c foodiego.com - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;

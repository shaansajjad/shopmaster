import React from "react";
import "../../css/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-body">
    <div className="footer-main">
      <div className="app-logo">
        <img src={require("../../assets/logo.png")} alt="appinventiv" />
      </div>
      <div className="footer-nav">
        <ul>
          <li>
            <Link className="option" to="">
              SHOPS
            </Link>
          </li>
          <li>
            <Link className="option" to="">
              OPTIONS
            </Link>
          </li>
          <li>
            <Link className="option" to="">
              CART
            </Link>
          </li>
          <li>
            <Link className="option" to="">
              CONTACT US
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-social">
        <li>
          <img src={require("../../assets/google-plus.svg")} alt="google" />
        </li>
        <li>
          <img src={require("../../assets/instagram.svg")} alt="instagram" />
        </li>
        <li>
          <img src={require("../../assets/twitter.svg")} alt="twitter" />
        </li>
      </div>
    </div>
  </div>
);

export default Footer;

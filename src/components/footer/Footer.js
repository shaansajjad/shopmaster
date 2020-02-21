import React from "react";
import "../../css/Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => (
  <div className="footer-body">
    <div className="container">
      <div className="footer-main">
        <div className="footer-inner app-logo">
          <img src={require("../../assets/logo.png")} alt="appinventiv" />
        </div>
        <div className="footer-inner">
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
        <div className="footer-inner social">
          <li>
            <img src={require("../../assets/g+.png")} alt="google" />
          </li>
          <li>
            <img src={require("../../assets/instagram.png")} alt="instagram" />
          </li>
          <li>
            <img src={require("../../assets/facebook.png")} alt="facebook" />
          </li>
          <li>
            <img src={require("../../assets/twitter.png")} alt="twitter" />
          </li>
        </div>
      </div>
    </div>
  </div>
);

export default Footer;

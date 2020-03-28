import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.scss";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/CartIcon";
import CartDropDown from "../cart-icon/CartDropdown";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="test">
          <div className="left">
            <Link className="logo-container" to="/">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <div className="options right">
            <Link className="option" to="/shop">
              SHOPS
            </Link>
            <Link className="option" to="">
              OPTIONS
            </Link>
            <Link className="option" to="">
              <img src={User} alt="user" />
            </Link>
            <Link className="option" to="">
              {<CartIcon />}
            </Link>
          </div>
          {this.props.hidden ? null : <CartDropDown />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(Header);

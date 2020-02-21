import React from "react";
import CartItem from "../cart-items/CartItem";
import "../../css/CartDropDown.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <button onClick={() => history.push("/checkout")}>Check Out</button>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));

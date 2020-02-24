import React from "react";
import CartItem from "../cart-items/CartItem";
import "../../css/CartDropDown.scss";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
// import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropdown = ({ cartItems, history }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Yor Cart is Empty</span>
      )}
    </div>
    <button onClick={() => history.push("/checkout")}>Check Out</button>
  </div>
);

const mapStateToProps = state => ({
  cartItems: selectCartItems(state)
});

// const mapStateToProps = (state) => ({
//   cartItems
// });

export default withRouter(connect(mapStateToProps)(CartDropdown));

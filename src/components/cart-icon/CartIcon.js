import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { ReactComponent as ShoppingIcon } from "../../assets/cartNew.svg";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import "../../css/CartIcon.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  itemCount: selectCartItemsCount(state)
});
// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   itemCount: cartItems.reduce((acc, cartItems) => acc + cartItems.quantity, 0)
// });

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

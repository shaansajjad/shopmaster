import React from "react";
import ShopPage from "./shop/ShopPage";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/checkout/CheckOut";
import { Switch, Route } from "react-router-dom";
import "../css/App.scss";

export default function RouterPage() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={Checkout} />
      </Switch>
    </div>
  );
}

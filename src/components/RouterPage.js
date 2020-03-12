import React from "react";
import ShopPage from "./shop/ShopPage";
import Homepage from "./pages/Homepage";
import Checkout from "./pages/checkout/CheckOut";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import PDF from "./pracice/pdf-to-img/PdfToImg";
import Registration from "./pracice/registration/SignUp";

import "../css/App.scss";

// const PublicLayout = props => (
//   <div>
//     <Switch>
//       <Route exact path="/pdf" component={PDF} />
//     </Switch>
//   </div>
// );

// const ProtectedLayout = props => (
//   <div>
//     <Header />
//     <Switch>
//       <Route exact path="/shop" component={ShopPage} />
//       <Route exact path="/checkout" component={Checkout} />
//       <Route path="/" component={Homepage} />
//     </Switch>
//     <Footer />
//   </div>
// );

const appLayout = Component => {
  return class appLayout extends React.Component {
    render() {
      return (
        <>
          <Header />
          <Component />
          <Footer />
        </>
      );
    }
  };
};

export default function RouterPage() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={appLayout(Homepage)} />
        <Route path="/shop" component={appLayout(ShopPage)} />
        <Route path="/checkout" component={appLayout(Checkout)} />
        <Route exact path="/pdf" component={PDF} />
        <Route exact path="/sign_up" component={Registration} />
      </Switch>
    </BrowserRouter>
  );
}

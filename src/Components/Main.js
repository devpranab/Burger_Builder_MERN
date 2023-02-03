import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { Route } from "react-router-dom";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "../Auth/Auth";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="container pt-5" style={{ minHeight: "75.4vh" }}>
            <Route path="/orders" component={Orders} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/login" component={Auth} />
            <Route path="/" exact component={BurgerBuilder} />
        </div>
    </div>
  );
};

export default Main;
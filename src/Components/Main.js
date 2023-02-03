import React from "react";
import Header from "./Header/Header";
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder";
import { Route, Switch, Redirect } from "react-router-dom";
import Orders from "./Orders/Orders";
import Checkout from "./Orders/Checkout/Checkout";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";

// state access by redux
const mapStateToProps = (state) => {
  return {
    token: state.token,
  };
};

const Main = (props) => {
  let ourRoutes = null;
  if (props.token === null) {
    ourRoutes = (
      <Switch>
        <Route path="/login" component={Auth} />
        <Redirect to="/login" />
      </Switch>
    );
  } else {
    ourRoutes = (
      <Switch>
        <Route path="/orders" component={Orders} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <div>
      <Header />
      <div className="container pt-5" style={{ minHeight: "75.4vh" }}>
        {ourRoutes}
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(Main);

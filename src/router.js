import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch } from "react-router-dom";

//// Import Layouts

import ExternalLayout from "./Components/layouts/ExternalLayout";

//// Import Components
import UserLogin from "./Components/pages/UserLogin";
import HomeComponent from "./Components/pages/HomeComponent";
import AddProductComponent from "./Components/pages/AddProductComponent";
import InternalLayout from "./Components/layouts/InternalLayout";
import AddToCartComponent from "./Components/pages/AddToCartComponent";
import Protected from "./Components/pages/Protected";
function Routes() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <Redirect to="login_layout" />
        </Route> */}

        <InternalLayout path="/home_layout" component={HomeComponent} />
        <InternalLayout path="/add_product" component={AddProductComponent} />
        <InternalLayout path="/add_cart/:id" component={AddToCartComponent} />
        <ExternalLayout path="/" component={UserLogin} />
      </Switch>
    </Router>
  );
}

export default Routes;

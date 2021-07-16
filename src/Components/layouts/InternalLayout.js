import React from "react";
import { Route } from "react-router-dom";
import Navbar from "../pages/Navbar";
import Protected from "../pages/Protected";

const InternalLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <Navbar />
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default InternalLayout;

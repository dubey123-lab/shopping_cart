import React from "react";
import { Route } from "react-router-dom";

const ExternalLayout = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(matchProps) => (
        <div>
          <Component {...matchProps} />
        </div>
      )}
    />
  );
};

export default ExternalLayout;

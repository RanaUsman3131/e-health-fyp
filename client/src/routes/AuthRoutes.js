import React from "react";
import { Route, Redirect } from "react-router-dom";

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !localStorage.getItem("user_auth") ? (
        <Component {...props} />
      ) : (
        <Redirect to="/portal" />
      )
    }
  />
);

export default AuthRoute;

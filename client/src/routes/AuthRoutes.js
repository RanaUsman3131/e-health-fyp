import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const Login = React.lazy(() => import("../screens/Auth/Login"));

export default function AuthRoutes() {
  let { path } = useRouteMatch();
  return (
    <>
      <Route path={`${path}/login`} component={Login} />
    </>
  );
}

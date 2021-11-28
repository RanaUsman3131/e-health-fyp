import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
const Dashboard = React.lazy(() => import("../screens/Dashboard"));
const Client = React.lazy(() => import("../screens/Client/Client"));
const Contact = React.lazy(() => import("../screens/Contact/Contact"));


export default function AppRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route path={`${path}dashboard`} component={Dashboard} />
      <Route path={`${path}clients`} component={Client} />
      <Route path={`${path}contacts`} component={Contact} />
    </>
  );
}

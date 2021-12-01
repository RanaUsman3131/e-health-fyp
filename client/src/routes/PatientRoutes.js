import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Patient/List"));
const Add = React.lazy(() => import("../screens/Patient/Add"));

const Detail = React.lazy(() => import("../screens/Contact/Detail"));
const Addresses = React.lazy(() => import("../screens/Contact/Addresses"));
const Employment = React.lazy(() => import("../screens/Contact/Employment"));

export default function PatientRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route path={`${path}/List`} component={List} />
      <Route path={`${path}/Add`} component={Add} />

    </>
  );
}

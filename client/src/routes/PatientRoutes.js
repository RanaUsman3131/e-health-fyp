import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Doctor/Patient/List"));
const Add = React.lazy(() => import("../screens/Doctor/Patient/Add"));


export default function PatientRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route path={`${path}/List`} component={List} />
      <Route path={`${path}/Add`} component={Add} />

    </>
  );
}

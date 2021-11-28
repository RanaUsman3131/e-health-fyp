import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Contact/List"));
const Add = React.lazy(() => import("../screens/Contact/Add"));

const Detail = React.lazy(() => import("../screens/Contact/Detail"));
const Addresses = React.lazy(() => import("../screens/Contact/Addresses"));
const Employment = React.lazy(() => import("../screens/Contact/Employment"));

export default function ContactDetailRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route path={`${path}/detail`} component={Detail} />
      <Route path={`${path}/addresses`} component={Addresses} />
      <Route path={`${path}/employments`} component={Employment} />
    </>
  );
}

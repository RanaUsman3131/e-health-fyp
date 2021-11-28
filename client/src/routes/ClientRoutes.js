import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Client/List"));
const Add = React.lazy(() => import("../screens/Client/Add"));

export default function ClientRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`} component={List} />
      <Route path={`${path}/add`} component={Add} />
    </>
  );
}

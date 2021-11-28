import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Contact/List"));
const Add = React.lazy(() => import("../screens/Contact/Add"));

const ContactDetail = React.lazy(() =>
  import("../screens/Contact/ContactDetail")
);

export default function ContactRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <Route exact path={`${path}`} component={List} />
      <Route exact path={`${path}/add`} component={Add} />
      <Route path={`${path}/details/:id`} component={ContactDetail} />
    </>
  );
}

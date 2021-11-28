import React from "react";
import { Route } from "react-router";
import AuthRoutes from "./AuthRoutes";
import Main from "../screens/Main";

export default function Index() {
  return (
    <>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Route path="/auth">
          <AuthRoutes />
        </Route>
        <Route path="/">
          <Main />
        </Route>
        {/* <Route path="*">
          {() => {
            return <div>NotFound</div>;
          }}
        </Route> */}
      </React.Suspense>
    </>
  );
}

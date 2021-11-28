import React from "react";
import { Route } from "react-router";
import AuthRoutes from "./AuthRoutes";
import Main from "../screens/Main";
import Home from "../screens/Home/Home";
export default function Index() {
  return (
    <>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Route path="/auth">
          <AuthRoutes />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/home" >
          <Home />
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

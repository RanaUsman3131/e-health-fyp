import React from "react";
import { BrowserRouter, Redirect, Switch, Route } from 'react-router-dom';
import AuthRoutes from "./AuthRoutes";
import Main from "../screens/Main";
import Home from "../screens/Home/Home";
import ProtectedRoute from './ProtectedRoutes';

const Login = React.lazy(() => import("../screens/Auth/Login"));
const Register = React.lazy(() => import("../screens/Auth/Register"));
export default function Index() {
  return (
    <>
      <BrowserRouter>
      <React.Suspense fallback={<h1>Loading...</h1>}>
        <Switch>
          <AuthRoutes exact path={`/login`} component={Login} />
          <AuthRoutes path={`/register`} component={Register} />

          <ProtectedRoute path="/portal" component={Main} />
            <Route render={() => <Redirect to="/login" />} />
          {/* <Redirect from="/" to="/login" /> */}
        </Switch>

      </React.Suspense>
        </BrowserRouter>
    </>
  );
}

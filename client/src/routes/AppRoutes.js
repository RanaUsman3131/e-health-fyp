import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
const Dashboard = React.lazy(() => import("../screens/Dashboard"));
const PatientRoutes = React.lazy(() => import("./PatientRoutes"));
const AppointmentRoutes = React.lazy(() => import("./AppointmentRoutes"));
const DoctorRoutes = React.lazy(() => import("./DoctorRoutes"));


export default function AppRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <React.Suspense fallback={"Loading"}>
      <Switch>
          <Route path={`${path}/dashboard`} component={Dashboard} />
          <Route path={`${path}/patient`} component={PatientRoutes} />
          <Route path={`${path}/doctor`} component={DoctorRoutes} />

          <Route path={`${path}/appointment`} component={AppointmentRoutes} />
      </Switch>
    </React.Suspense>
    
    </>
  );
}

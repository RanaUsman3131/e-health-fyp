import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
const Dashboard = React.lazy(() => import("../screens/Dashboard"));
const Patient = React.lazy(() => import("../screens/Patient/PatientRoutes"));
const AppointmentRoutes = React.lazy(() => import("../screens/Patient/PatientRoutes"));
const Appointment = React.lazy(() => import("../screens/Appointment/AppointmentRoutes"));


export default function AppRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <React.Suspense fallback={"Loading"}>
      <Switch>
          <Route path={`${path}/dashboard`} component={Dashboard} />
          <Route path={`${path}/patient`} component={Patient} />
          {/* <Route path={`${path}/doctor`} component={DoctorRoutes} /> */}

          <Route path={`${path}/appointment`} component={Appointment} />
      </Switch>
    </React.Suspense>
    
    </>
  );
}

import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
const Dashboard = React.lazy(() => import("../screens/Doctor/Dashboard"));
const PatientDashboard = React.lazy(() => import("../screens/Patient/Dashboard"));
const Patient = React.lazy(() => import("../screens/Doctor/Patient/PatientRoutes"));
const PatientAppointment = React.lazy(() => import("../screens/Patient/Appointment/AppointmentRoutes"));
const Appointment = React.lazy(() => import("../screens/Doctor/Appointment/AppointmentRoutes"));
const Setting = React.lazy(() => import("../screens/Doctor/Setting/index"));


export default function AppRoutes() {
  let { path } = useRouteMatch();

  return (
    <>
      <React.Suspense fallback={"Loading"}>
      <Switch>
          <Route path={`${path}/dashboard`} component={Dashboard}/>
          <Route path={`${path}/patient`} component={Patient}/>
          <Route path={`${path}/appointment`} component={Appointment}/>
          <Route path={`${path}/setting`} component={Setting} />

          <Route path={`${path}/patient_dashboard`} component={PatientDashboard} />
          <Route path={`${path}/patient_appointment`} component={PatientAppointment} />


          
      </Switch>
    </React.Suspense>
    
    </>
  );
}

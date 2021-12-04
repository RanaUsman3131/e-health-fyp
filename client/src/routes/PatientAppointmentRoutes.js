import React from "react";
import { Route, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Patient/Appointment/List"));
const Add = React.lazy(() => import("../screens/Patient/Appointment/Add"));


export default function PatientAppointmentRoutes() {
    let { path } = useRouteMatch();

    return (
        <>
            <Route path={`${path}`} component={List} />
            <Route path={`${path}/Add`} component={Add} />

        </>
    );
}

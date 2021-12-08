import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Doctor/Appointment/List"));
const Add = React.lazy(() => import("../screens/Doctor/Appointment/Add"));
const Edit = React.lazy(() => import("../screens/Doctor/Appointment/Edit"));

export default function AppointmentRoutes() {
    let { path } = useRouteMatch();

    return (
        <>
            <React.Suspense fallback={"Loading"}>
                <Switch>
                    <Route path={`${path}`} component={List} />
                    <Route path={`${path}/add`} component={Add} />
                    <Route path={`${path}/edit/:id`} component={Edit} />

                </Switch>
            </React.Suspense>
        </>
    );
}

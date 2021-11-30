import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const List = React.lazy(() => import("../screens/Appointment/List"));
const Add = React.lazy(() => import("../screens/Client/Add"));

export default function AppointmentRoutes() {
    let { path } = useRouteMatch();

    return (
        <>
            <React.Suspense fallback={"Loading"}>
                <Switch>
                    <Route path={`${path}`} component={List} />
                    <Route path={`${path}/add`} component={Add} />

                </Switch>
            </React.Suspense>
        </>
    );
}

/* eslint-disable max-len */
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        {...rest}
        render={(props) =>
            // localStorage.getItem('accessToken') ? (
                <Component {...props} />
            // ) : (
            //     <Redirect to="/login" />
            // )
        }
    />
);

export default ProtectedRoute;

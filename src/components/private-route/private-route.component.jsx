import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../../redux/auth/auth.selectors";

const PrivateRoute = ({ component: Component, roles, currentUser, ...otherProps }) => (
    <Route {...otherProps} render={props => {
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login' }} />;
            // return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(currentUser.role) === -1) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/dashboard' }} />;
        }

        // authorised so return component
        return <Component {...props} />;
    }} />
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(PrivateRoute);

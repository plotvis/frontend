import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

const NotAuthenticatedRoute = ({component: Component, authed, ...rest}) => {
  return (
    <Route
      {...rest}
      render={(props) => authed === false
        ? <Component {...props} />
        : <Redirect to={{pathname: '/dashboard', state: {from: props.location}}} />}
    />
  )
}

export default NotAuthenticatedRoute;

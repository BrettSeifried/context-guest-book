import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { useUser } from './UserContext';

export default function PrivateRoute({ children, ...routeProps }) {
  const { user } = useUser();

  return (
    <>
      <p>login route</p>
      <Route
        {...routeProps}
        render={({ location }) =>
          user ? children : <Redirect to={{ pathname: '/login', state: { from: location } }} />
        }
      />
    </>
  );
}

//    !user ? <Redirect to={{ pathname: '/login', state: { from: location } }} : children />

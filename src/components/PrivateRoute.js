import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loading from './Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

function PrivateRoute({ children, ...rest }) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loading ? (
          <Loading />
        ) : !user || error ? (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        ) : user.emailVerified ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/auth/verification',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

export default PrivateRoute;

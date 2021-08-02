import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loading from './Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../lib/firebase';

function PrivateAndParamsRoute({ children: Component, ...rest }) {
  const [user, loading, error] = useAuthState(auth);
  return (
    <Route
      {...rest}
      render={({ location, ...routeProps }) =>
        loading ? (
          <Loading />
        ) : !user || error ? (
          // <GoogleButton/> button can be used instead
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        ) : (
          <Component {...routeProps} />
        )
      }
    />
  );
}

export default PrivateAndParamsRoute;

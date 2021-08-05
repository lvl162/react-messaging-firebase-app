import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Redirect, Route } from 'react-router-dom';
import { auth } from '../lib/firebase';
import Loading from './Loading';

const NotVerifiedRoute = ({ children, ...rest }) => {
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
          <Redirect
            to={{
              pathname: '/',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
};

export default NotVerifiedRoute;

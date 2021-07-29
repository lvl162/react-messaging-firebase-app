import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoaded, isEmpty } from 'react-redux-firebase';

function PrivateRoute({ children, ...rest }) {
  const auth = useSelector((state) => state.firebase.auth);
  console.log(auth);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        // isLoaded(auth) && !isEmpty(auth) ? (
        //   children
        // ) : (
        //   <Redirect
        //     to={{
        //       pathname: '/login',
        //       state: { from: location },
        //     }}
        //   />
        // )
        !isLoaded(auth) ? (
          <span>Loading...</span>
        ) : isEmpty(auth) ? (
          // <GoogleButton/> button can be used instead
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        ) : (
          children
        )
      }
    />
  );
}

export default PrivateRoute;

import React from 'react';
import { useSelector } from 'react-redux';
import { useFirebase, isLoaded, isEmpty } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
// import GoogleButton from 'react-google-button' // optional

function LoginPage() {
  const firebase = useFirebase();
  const auth = useSelector((state) => state.firebase.auth);

  function loginWithGoogle() {
    return firebase.login({ provider: 'google', type: 'popup' });
  }

  return (
    <div>
      <h2>Auth</h2>
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        // <GoogleButton/> button can be used instead
        <button onClick={loginWithGoogle}>Login With Google</button>
      ) : (
        <Redirect to='/protected' />
      )}
    </div>
  );
}

export default LoginPage;

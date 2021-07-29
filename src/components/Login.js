import React from 'react';

import { auth, googleAuthProvider } from '../lib/firebase';

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Welcome to Unichat!</h2>

        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(googleAuthProvider)}
        >
          Sign In with Google
        </div>

        <br />
        <br />

        {/* <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div> */}
      </div>
    </div>
  );
}
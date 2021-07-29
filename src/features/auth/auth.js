import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { signIn, signOut } from './authSlice';
const Auth = () => {
  const signedIn = useSelector((state) => state.auth.signedIn);
  const status = useSelector((state) => state.auth.status);
  const dispatch = useDispatch();
  let content = <h1>Dang doi bam</h1>;

  useEffect(() => {
    if (status === 'idle') {
      console.log('chua nam j');
    }
  }, [status, dispatch]);
  if (status === 'loading') {
    content = <h1>Loading...</h1>;
  } else if (status === 'succeeded') {
    content = <h1>Login</h1>;
  } else if (status === 'error') {
    content = <h1>Error</h1>;
  }
  return (
    <div>
      <div>
        {!signedIn && (
          <button
            aria-label='Increment value'
            onClick={() => dispatch(signIn())}
          >
            Login
          </button>
        )}
        {signedIn && (
          <button
            aria-label='Decrement value'
            onClick={() => dispatch(signOut())}
          >
            Logout
          </button>
        )}
      </div>
      {/* omit additional rendering output here */}
      {content}
    </div>
  );
};

export default Auth;

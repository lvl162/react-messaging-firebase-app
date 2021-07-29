import React from 'react';
import { Redirect } from 'react-router-dom';
import { StyledSignInButton } from '../../components/Buttons';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../features/auth/authSlice';
import { Spinner } from 'react-bootstrap';

const Login = () => {
  const status = useSelector((state) => state.auth.status);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleSignIn = () => {
    dispatch(signIn());
  };

  return user && status === 'succeeded' ? (
    <Redirect to='/message'></Redirect>
  ) : (
    // history.push('/message')
    <>
      <div className='Login'>
        <StyledSignInButton onClick={handleSignIn}>
          {status === 'loading' && (
            <Spinner
              as='span'
              animation='border'
              size='sm'
              role='status'
              aria-hidden='true'
            />
          )}
          <p>Sign in with Google</p>
        </StyledSignInButton>
      </div>
    </>
  );
};

export default Login;

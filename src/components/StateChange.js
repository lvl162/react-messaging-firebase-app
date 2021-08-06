import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signIn, signOut } from '../features/auth/authSlice';
import { auth } from '../lib/firebase';

const StateChange = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const clean = auth.onAuthStateChanged((user) => {
      if (user && user.emailVerified) {
        dispatch(signIn(user));
      } else {
        dispatch(signOut(user));
      }
    });
    return () => {
      clean();
    };
  }, [dispatch]);
  return <></>;
};

export default StateChange;

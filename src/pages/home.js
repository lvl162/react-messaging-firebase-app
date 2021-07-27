import React from 'react';
import { Link } from 'react-router-dom';
import { auth, googleAuthProvider } from '../lib/firebase';

const Home = () => {
  return (
    <>
      <h1>Hello</h1>
      <p><Link to='/dashboard'>View Dashboard</Link></p>
      {/* <Link to='/message'>Go to messages</Link> */}
      <SignInButton />
      <SignOutButton />
    </>
  );
};

export default Home;

const SignInButton = () => {
  const signInWithGoogle = async () => {
    const info = await auth.signInWithPopup(googleAuthProvider);
  };
  return <button onClick={signInWithGoogle}>Sign in with Google</button>;
};
const SignOutButton = () => {
  return (
    <button
      onClick={async () => {
        await auth.signOut();
      }}
    >
      Sign out
    </button>
  );
};

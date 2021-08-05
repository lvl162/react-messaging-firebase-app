import React from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
// import { auth } from '../../lib/firebase';
import NavBar from './NavBar';
import NewFeed from './NewFeed';

const HomePage = ({ user }) => {
  // const me = useSelector((state) => state.auth.user);
  // if (loading) return <Loading />;
  if (!user) return <Loading />;
  // else

  const me = {
    uid: user.uid,
    displayName: user.displayName,
    photoURL: user.photoURL,
    email: user.email,
  };
  return (
    <div>
      <NavBar me={me} />
      <NewFeed me={me} />
    </div>
  );
};

export default HomePage;

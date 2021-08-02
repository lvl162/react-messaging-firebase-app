import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { auth, firestore } from '../../lib/firebase';
import { useUserData } from '../../lib/hooks';
import NavBar from './NavBar';
import NewFeed from './NewFeed';

const HomePageContainer = styled.div`
  width: 100%;
  height: 500vh;
  background: white;
`;

const HomePage = () => {
  // const [user, loading, error] = useAuthState(auth);
  const user = useSelector((state) => state.auth.user);
  // if (loading) return <h1>Loading...</h1>;
  // if (error) return <h1>Loading...</h1>;
  // else
  return (
    <HomePageContainer>
      <NavBar avtUrl={user?.photoURL}/>
      <NewFeed />
    </HomePageContainer>
  );
};

export default HomePage;

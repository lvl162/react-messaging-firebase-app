import React from 'react';
import styled from 'styled-components';
import { firestore } from '../../lib/firebase';
import { useUserData } from '../../lib/hooks';
import NavBar from './NavBar';
import NewFeed from './NewFeed';

const HomePageContainer = styled.div`
  width: 100%;
  height: 500vh;
  background: white;
`;

const HomePage = () => {
  const {user, username} = useUserData();

  if (!user) return <h1>Loading...</h1>;

  return (
    <HomePageContainer>
      <NavBar />
      <NewFeed />
    </HomePageContainer>
  );
};

export default HomePage;

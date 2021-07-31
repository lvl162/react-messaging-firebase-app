import React from 'react';
import styled from 'styled-components';

import PostsList from '../../features/posts/postsList';
import NavBar from './NavBar';
import NewFeed from './NewFeed';

const HomePageContainer = styled.div`
  width: 100%;
  height: 500vh;
  background: white;
`;

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
      <NewFeed />
    </HomePageContainer>
  );
};

export default HomePage;

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Loading from '../../components/Loading';
import ChatHistory from './ChatHistorySection';
import {
  InboxContainer,
  MessagePageContainer,
  MessageSectionWrapper,
} from './elements';
import NavBarSection from './NavBarSection';

const NewMessage = styled.div`
  flex: 1;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
`;
const NewMessagePage = () => {
  const me = useSelector((state) => state.auth.user);
  // const me = auth.currentUser;
  if (!me) return <Loading />;
  return (
    <MessagePageContainer>
      <NavBarSection />
      <MessageSectionWrapper>
        <ChatHistory me={me}></ChatHistory>
        <InboxContainer>
          <NewMessage>Chiếu mới chưa nhắn zới ai</NewMessage>
        </InboxContainer>
      </MessageSectionWrapper>
    </MessagePageContainer>
  );
};

export default NewMessagePage;

import React from 'react';

import styled from 'styled-components';

const MessagePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const NavBarSection = styled.nav`
  width: 100%;
  height: 50px;
  background-color: black;
  border-bottom: 1px solid #dbdbdb;
`;
const MessageSection = styled.main`
  flex-grow: 1;
  flex-shrink: 0;
  display: flex;
`;
const ChatList = styled.nav`
  min-width: 25%;
  border-right: 1px solid #dbdbdb;
`;
const InboxContainer = styled.div`
  flex: 1 0 0%;
  min-width: 70vw;
  background-color: gray;
`;
const InboxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 100%;
`;
const InboxHeaderContainer = styled.header`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #dbdbdb;
`;
const InboxHeaderWrapper = styled.div`
  height: 10px;
  width: 100%;
`;

const InboxBodyContainer = styled.div`
  flex-grow: 2;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
`;
const InboxBodyWrapper = styled.div``;
const SendMessageContainer = styled.div`
  flex: 1 0 0%;
  max-height: 10vh;
  width: 100%;
  background-color: yellow;
`;
const SendMessageWrapper = styled.div``;
const SendMessageForm = styled.form``;
const SendMessageInput = styled.input``;
const SendMessageSubmit = styled.button``;

const MESSPage = () => {
  return (
    <MessagePageContainer>
      <NavBarSection>navbarne</NavBarSection>
      <MessageSection>
        <ChatList>chatlistne</ChatList>
        <InboxContainer>
          <InboxWrapper>
            <InboxHeaderContainer>
              <InboxHeaderWrapper>header</InboxHeaderWrapper>
            </InboxHeaderContainer>
            <InboxBodyContainer>
              <InboxBodyWrapper>inbox body wrapper</InboxBodyWrapper>
            </InboxBodyContainer>
            <SendMessageContainer>
              <SendMessageWrapper>
                <SendMessageForm>
                  <SendMessageInput></SendMessageInput>
                  <SendMessageSubmit>send</SendMessageSubmit>
                </SendMessageForm>
              </SendMessageWrapper>
            </SendMessageContainer>
          </InboxWrapper>
        </InboxContainer>
      </MessageSection>
    </MessagePageContainer>
  );
};

export default MESSPage;

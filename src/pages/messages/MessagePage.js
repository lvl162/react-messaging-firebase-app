import React from 'react';
import { MessagePageContainer, MessageSectionWrapper } from './elements';
import ChatHistory from './ChatHistorySection';
import NavBarSection from './NavBarSection';
import InboxSectionHandle from './InboxSectionHandle';

const MessagePage = ({ yourId }) => {
  console.log('render msg page');
  return (
    <MessagePageContainer>
      <NavBarSection />
      <MessageSectionWrapper>
        <ChatHistory></ChatHistory>
        <InboxSectionHandle yourId={yourId}></InboxSectionHandle>
      </MessageSectionWrapper>
    </MessagePageContainer>
  );
};

export default MessagePage;

import React from 'react';
import { MessagePageContainer, NavBarSection } from './elements';
import { MessageSection } from './MessageSectionComponent';

const MessagePage = () => {
  return (
    <MessagePageContainer>
      <NavBarSection>navbarne</NavBarSection>
      <MessageSection></MessageSection>
    </MessagePageContainer>
  );
};

export default MessagePage;

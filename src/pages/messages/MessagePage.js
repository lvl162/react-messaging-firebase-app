import React from 'react';
import { MessagePageContainer, MessageSectionWrapper } from './elements';
import ChatHistory from './ChatHistorySection';
import { useSelector } from 'react-redux';
import {
  useCollectionOnce,
  useDocumentDataOnce,
} from 'react-firebase-hooks/firestore';
import { docToJson, firestore } from '../../lib/firebase';
import InboxSection from './InboxSection';
import Loading from '../../components/Loading';
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

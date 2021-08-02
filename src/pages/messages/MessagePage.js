import React from 'react';
import { MessagePageContainer, MessageSectionWrapper } from './elements';
import ChatHistory from './ChatHistorySection';
import { useSelector } from 'react-redux';
import {
  useCollectionDataOnce,
  useCollectionOnce,
  useDocumentDataOnce,
} from 'react-firebase-hooks/firestore';
import { docToJson, firestore } from '../../lib/firebase';
import InboxSection from './InboxSection';
import Loading from '../../components/Loading';
import NavBarSection from './NavBarSection';
const genChatRoomName = (me, you) => {
  if (me && you) {
    if (me.localeCompare(you) === 0) {
      return `${me}__${me}`;
    } else if (me.localeCompare(you) > 0) {
      return `${me}__${you}`;
    } else {
      return `${you}__${me}`;
    }
  }
  return null;
};
const MessagePage = ({ yourId }) => {
  const me = useSelector((state) => state.auth.user);
  const messagesRef = firestore
    .collection(`chats/${genChatRoomName(me.uid, yourId)}/messages`)
    .orderBy('createdAt', 'asc')
    .limitToLast(20);

  const [value, loading1, error1] = useDocumentDataOnce(
    firestore.doc(`users/${yourId}`)
  );
  const [messages, loading2, error2] = useCollectionOnce(messagesRef);

  if (loading1 || loading2) return <Loading />;
  if (error1 || error2 || !value) return <h1>Not found this person</h1>;
  if (me && value && messages) {
    const messagesInit = messages.docs.map(docToJson);

    return (
      <MessagePageContainer>
        <NavBarSection />
        <MessageSectionWrapper>
          <ChatHistory me={me}></ChatHistory>
          <InboxSection
            me={me}
            you={{ uid: yourId, ...value }}
            messagesInit={messagesInit}
          ></InboxSection>
        </MessageSectionWrapper>
      </MessagePageContainer>
    );
  }
};

export default MessagePage;

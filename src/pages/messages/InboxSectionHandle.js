import React from 'react';
import {
  useCollectionOnce,
  useDocumentDataOnce,
} from 'react-firebase-hooks/firestore';
import { useSelector } from 'react-redux';
import Loading from '../../components/Loading';
import { docToJson, firestore } from '../../lib/firebase';
import { InboxContainer, InboxWrapper } from './elements';
import InboxSection from './InboxSection';
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
const InboxSectionHandle = ({ yourId }) => {
  const me = useSelector((state) => state.auth.user);

  // const me = auth.currentUser;
  const messagesRef = firestore
    .collection(`chats/${genChatRoomName(me.uid, yourId)}/messages`)
    .orderBy('createdAt', 'asc')
    .limitToLast(20);

  const [value, loading1, error1] = useDocumentDataOnce(
    firestore.doc(`users/${yourId}`)
  );
  const [messages, loading2, error2] = useCollectionOnce(messagesRef);

  if (loading1 || loading2)
    return (
      <>
        {' '}
        <InboxContainer>
          <InboxWrapper>
            <div className='loader' />
          </InboxWrapper>
        </InboxContainer>
      </>
    );
  if (error1 || error2 || !value) return <h1>Not found this person</h1>;
  const messagesInit = messages && messages.docs.map(docToJson);
  return (
    <>
      <InboxSection
        me={me}
        you={{ uid: yourId, ...value }}
        messagesInit={messagesInit}
      ></InboxSection>
    </>
  );
};

export default InboxSectionHandle;

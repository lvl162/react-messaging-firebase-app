import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  isEmpty,
  isLoaded,
  useFirebaseConnect,
  useFirestore,
  useFirestoreConnect,
} from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import AllContacts from '../../components/AllContacts';
import { auth, firestore, serverTimestamp } from '../../lib/firebase';
import { useCollection } from 'react-firebase-hooks/firestore';

const MessageHandlePageTest = ({
  uid,
  chatRoomId,
  myName,
  toUser,
  messages,
}) => {
  const [input, setInput] = useState('');
  const firestore = useFirestore();
  if (!isLoaded(messages)) {
    return <span>Loading...</span>;
  }

  // Message if todos are empty
  if (isEmpty(messages)) {
    return <span>No Todos Found</span>;
  }
  const sendMessage = async () => {
    if (input !== '' && chatRoomId) {
      const res = await firestore
        .collection(`messages`)
        .doc(chatRoomId)
        .collection('chats')
        .add({
          content: input,
          createdAt: serverTimestamp(),
          from: uid,
        });
      if (res) setInput('');
    }
  };

  //   useFirestoreConnect([
  //     {
  //       collection: 'messages',
  //       doc: chatRoomId + '',
  //       subcollections: [
  //         { collection: 'chats', orderBy: ['createdAt', 'desc'], limit: 5 },
  //       ],
  //       storeAs: 'myChats',
  //     },
  //   ]);
  //   const messages = useSelector(
  //     (state) => state.firestore.data.myChats && state.firestore.data.myChats
  //   );
  //   console.log(messages);
  return (
    <>
      <div>
        {messages &&
          Object.entries(messages)
            .filter(([key, value]) => value)
            .map(([key, value]) => {
              let content = '';
              value?.from === uid
                ? (content = `FROM:${myName}, CONTENT:${value?.content}`)
                : (content = `FROM:${toUser.displayName} CONTENT:${value?.content}`);

              return <p key={key}>{content}</p>;
            })}
        {!messages && <h1>Loading...</h1>}
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage(input);
        }}
      >
        <input
          placeholder='enter message'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type='submit'>Send</button>
      </form>
    </>
  );
};

const MessagePageTest = ({ match }) => {
  const uid = auth.currentUser?.uid;
  const myName = auth.currentUser?.displayName;
  const genChatRoomName = (me, you) => {
    if (me && you) {
      if (me.localeCompare(you) === 0) {
        return null;
      } else if (me.localeCompare(you) > 0) {
        return `${me}__${you}`;
      } else {
        return `${you}__${me}`;
      }
    }
    return null;
  };
  const { to } = match.params;

  useFirestoreConnect([{ collection: 'users' }]);
  useFirestoreConnect([
    {
      collection: 'messages',
      doc: genChatRoomName(to, uid) + '',
      subcollections: [
        { collection: 'chats', orderBy: ['createdAt', 'desc'], limit: 5 },
      ],
      storeAs: 'myChats',
    },
  ]);
  const toUserInfo = useSelector(
    (state) =>
      state.firestore.data.users && to && state.firestore.data.users[to + '']
  );
  const messages = useSelector(
    (state) => state.firestore.data.myChats && state.firestore.data.myChats
  );
  console.log(messages);
  //   console.log(toUserInfo);

  const chatRoomId = genChatRoomName(to, uid);

  if (!to && !uid && !toUserInfo) {
    return <Redirect to='/404' />;
  }
  if (!toUserInfo) {
    return <h1>loading...</h1>;
  }
  return (
    <>
      <AllContacts />
      <MessageHandlePageTest
        messages={messages}
        chatRoomId={chatRoomId}
        uid={uid}
        myName={myName}
        toUser={{
          displayName: toUserInfo.email,
          photoURL: toUserInfo.photoURL,
        }}
      />
      <FirestoreCollection />
    </>
  );
};

const FirestoreCollection = () => {
  const [value, loading, error] = useCollection(
    firestore
      .collection('messages')
      .doc('i6o0bIGWa6OJ5eHfwvipeA67jsp1__dyn0K2zT8shG2IrYMJKT8ZdAuxY2')
      .collection('chats')
      .orderBy('createdAt', 'asc')
      .limitToLast(10),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Collection: Loading...</span>}
        {value && (
          <span>
            Collection:{' '}
            {value.docs.map((doc) => (
              <React.Fragment key={doc.id}>
                {JSON.stringify(doc.data()?.content)},{' '}
              </React.Fragment>
            ))}
          </span>
        )}
      </p>
    </div>
  );
};
export default MessagePageTest;

import React from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { auth } from '../lib/firebase';
const AllContacts = () => {
  useFirestoreConnect(['users']); // sync todos collection from Firestore into redux
  const users = useSelector((state) => state.firestore.data.users);
  const uid = auth.currentUser?.uid;
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
  return (
    <>
      {uid && <h1>Me: {uid}</h1>}
      {users &&
        Object.keys(users).map((m) => {
          const chatRoomId = genChatRoomName(m, uid);
          return (
            chatRoomId && (
              <Link to={`message/t/${chatRoomId}`} key={m}>
                {chatRoomId}
              </Link>
            )
          );
        })}
    </>
  );
};

export default AllContacts;

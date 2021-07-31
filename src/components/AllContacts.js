import React, { memo } from 'react';
import { useSelector } from 'react-redux';
import { useFirestoreConnect } from 'react-redux-firebase';
import { Link } from 'react-router-dom';
import { auth } from '../lib/firebase';
const AllContacts = memo(() => {
  console.log('render at all contacts');
  const users = useSelector((state) => state.firestore.data.users);
  const uid = auth.currentUser?.uid;
  return (
    <>
      {uid && <h1>Me: {uid}</h1>}
      {users &&
        Object.entries(users)
          .filter(([key, value]) => key !== uid)
          .map(([m, value]) => {
            return (
              <Link to={`/message/t/${m}`} key={m}>
                {value.displayName} : {value.email}
              </Link>
            );
          })}
    </>
  );
});

export default AllContacts;

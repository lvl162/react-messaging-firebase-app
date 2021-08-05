import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Avatar from '../../components/Avatar';
import Loading from '../../components/Loading';
import { auth, firestore } from '../../lib/firebase';

const NameAndEmailTag = styled(Link)`
  flex: 1;
  text-decoration: none;
  color: inherit;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  margin: 10px;
  gap: 10px;
`;
const Avt = styled.div`
  max-width: 50px;
`;

const Test = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const SuggestUser = () => {
  const [users, setUsers] = useState([]);
  //   const uid = useSelector((state) => state.auth.user.uid);
  const uid = auth.currentUser.uid;
  useEffect(() => {
    const getSuggestUsers = async () => {
      const usersRef = firestore.collection('users');
      const users = (await usersRef.get()).docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setUsers(users);
    };
    getSuggestUsers();
  }, []);
  return (
    <div>
      <h3>Suggest List</h3>
      {users.length > 0 ? (
        users
          .filter((doc) => doc.id !== uid)
          .map((doc) => (
            <NameAndEmailTag to={`/message/t/${doc.id}`}>
              <Avt>
                <Avatar src={doc.photoURL} size='30' />
              </Avt>
              <Test>
                <p>{doc.displayName}</p>
                <p>@{doc.email.split('@')[0]}</p>
              </Test>
            </NameAndEmailTag>
          ))
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default SuggestUser;

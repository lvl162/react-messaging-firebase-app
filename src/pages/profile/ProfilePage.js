import React from 'react';
import { useDocumentDataOnce } from 'react-firebase-hooks/firestore';
import { Redirect } from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Loading from '../../components/Loading';
import { firestore } from '../../lib/firebase';
import { NewFeedContainer } from '../homepage/NewFeedElements';
import PostList from '../homepage/PostList';

const ProfilePage = ({ match }) => {
  const { uid } = match.params;
  const [user, loading, error] = useDocumentDataOnce(
    firestore.doc(`users/${uid}`)
  );
  if (loading) return <Loading />;
  if (!user || error) return <Redirect to='/notfound/404' />;

  return (
    <NewFeedContainer>
      <Avatar src={user.photoURL} size='150' />
      <h3>{user.displayName}</h3>
      <h4>@{user.email.split('@')[0]}</h4>
      <PostList
        postsRef={firestore
          .collection(`users/${uid}/posts`)
          .where('public', '==', true)
          .orderBy('createdAt', 'desc')}
      />
    </NewFeedContainer>
  );
};

export default ProfilePage;

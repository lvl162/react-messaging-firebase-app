import React from 'react';
import { firestore } from '../../lib/firebase';
import { NewFeedContainer } from './NewFeedElements';
import NewPost from './NewPost';
import PostList from './PostList';
const NewFeed = ({ me }) => {
  return (
    <NewFeedContainer>
      <NewPost me={me} />
      <PostList
        postsRef={firestore
          .collectionGroup('posts')
          .orderBy('createdAt', 'desc')}
      />
    </NewFeedContainer>
  );
};

export default NewFeed;

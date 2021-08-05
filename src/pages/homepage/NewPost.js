import { useState } from 'react';
import Avatar from '../../components/Avatar';
import { firestore, serverTimestamp } from '../../lib/firebase';
import {
  NewPostContainer,
  NewPostWrapper,
  NewPostHeaderContainer,
  NewPostHeaderWrapper,
  NewPostHeaderNameAndPublic,
  NewPostHeaderName,
  NewPostHeaderPublicOrNot,
  NewPostBodyContainer,
  NewPostButtons,
  NewPostFooterPost,
  NewPostFooterCancel,
  NewPostBodyWrapper,
} from './NewPostElements';
import PostItem from './PostItem';
import { timeSince } from '../../lib/helper';
import { PostsListContainer } from './PostElements';
import toast from 'react-hot-toast';
const mockSrc = require('../../images/hacker.png').default;

const NewPost = ({ me }) => {
  const handlePost = () => {
    const content = inputRef.innerHTML;
    if (content.trim() !== '') {
      const post = {
        content: content,
        createdAt: serverTimestamp(),
        likesCount: 0,
        commentCount: 0,
        public: true,
        author: me,
        updatedAt: serverTimestamp(),
      };
      firestore
        .collection(`users/${me.uid}/posts`)
        .add(post)
        .then((res) => {
          setNewPosts([
            { ...post, createdAt: new Date(), id: res.id },
            ...newPosts,
          ]);
          toast.success('Post published successfully!');
        })
        .catch((err) => {
          console.log(err);
          toast.error('Post was not pubished!');
        });

      inputRef.focus();
      inputRef.textContent = '';
    }
  };
  const handleCancel = () => {
    inputRef.textContent = '';
  };
  let inputRef = null;
  const { photoURL, displayName } = me;
  const [newPosts, setNewPosts] = useState([]);
  return (
    <>
      <NewPostContainer>
        <NewPostWrapper>
          <NewPostHeaderContainer>
            <NewPostHeaderWrapper>
              <Avatar src={photoURL || mockSrc} size={35} padding={1}></Avatar>
              <NewPostHeaderNameAndPublic>
                <NewPostHeaderName>{displayName}</NewPostHeaderName>
                <NewPostHeaderPublicOrNot>Public</NewPostHeaderPublicOrNot>
              </NewPostHeaderNameAndPublic>
              <NewPostButtons>
                <NewPostFooterPost onClick={handlePost}>Post</NewPostFooterPost>
                <NewPostFooterCancel onClick={handleCancel}>
                  Cancel
                </NewPostFooterCancel>
              </NewPostButtons>
            </NewPostHeaderWrapper>
          </NewPostHeaderContainer>
          <NewPostBodyContainer>
            <NewPostBodyWrapper
              ref={(node) => (inputRef = node)}
              contentEditable='true'
              data-ph='Write a new post...'
            ></NewPostBodyWrapper>
          </NewPostBodyContainer>
        </NewPostWrapper>
      </NewPostContainer>
      <PostsListContainer>
        {newPosts.map((doc) => {
          const { author, content, createdAt, likesCount, commentsCount } = doc;
          const createdBy = '@' + author.email.split('@')[0];
          const createdSince = createdAt ? timeSince(createdAt) : 'loading...';
          return (
            <PostItem
              nickname={createdBy}
              authorId={author.uid}
              key={doc.id}
              postId={doc.id}
              avtUrl={author.photoURL}
              displayName={author.displayName}
              content={content}
              createdAt={createdSince}
              likesCount={likesCount}
              commentsCount={commentsCount}
            />
          );
        })}
      </PostsListContainer>
    </>
  );
};
export default NewPost;

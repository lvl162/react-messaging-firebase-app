import React, { memo, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import {
  LikeButton,
  PostItemBodyContainer,
  PostItemBodyWrapper,
  PostItemContainer,
  PostItemFooterContainer,
  PostItemFooterWrapper,
  PostItemHeaderAvt,
  PostItemHeaderContainer,
  PostItemHeaderName,
  PostItemHeaderOptions,
  PostItemHeaderProfile,
  PostItemHeaderWrapper,
  PostHeaderNameAndTime,
  PostItemHeaderTime,
  SaveButton,
} from './PostElements';
import {
  auth,
  firestore,
  increment,
  serverTimestamp,
} from '../../lib/firebase';
import { useSelector } from 'react-redux';
import { useDocument } from 'react-firebase-hooks/firestore';
import Avatar from '../../components/Avatar';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DropDown from '../dropdown/DropDown';
const NickName = styled(Link)`
  text-decoration: none;
  user-select: none;
  color: gray;
  font-size: 0.9rem;
  align-self: flex-start;
  &:hover {
    font-style: italic;
  }
`;
const PostItem = memo(
  ({
    nickname,
    authorId,
    postId,
    avtUrl,
    displayName,
    createdAt,
    content,
    likesCount,
  }) => {
    const [contentState, setContentState] = useState(content);
    // const myId = useSelector((state) => state.auth.user.uid);
    const myId = auth.currentUser.uid;
    const postRef = firestore.doc(`users/${authorId}/posts/${postId}`);
    const likesRef = postRef.collection('likes').doc(myId);
    const [heartDoc] = useDocument(likesRef);
    const [likes, setLikes] = useState(likesCount);
    // Create a user-to-post relationship
    const addHeart = async () => {
      const uid = myId;
      const batch = firestore.batch();

      batch.update(postRef, { likesCount: increment(1) });
      batch.set(likesRef, { uid });
      await batch.commit();
      setLikes(likes + 1);
    };

    // Remove a user-to-post relationship
    const removeHeart = async () => {
      const batch = firestore.batch();

      batch.update(postRef, { likesCount: increment(-1) });
      batch.delete(likesRef);

      await batch.commit();
      setLikes(likes - 1);
    };
    // const handleLike = () => {};
    // const handleComment = () => {};
    const [updateMode, setUpdateMode] = useState(false);
    const [deleted, setDeleted] = useState(false);
    const [dirty, setDirty] = useState(false);
    const [expand, setExpand] = useState(false);

    const handleDelete = () => {
      //yes or no
      // yes
      const confirmBox = window.confirm(
        'Do you really want to delete this post?'
      );
      if (confirmBox === true) {
        postRef
          .delete()
          .then((res) => {
            toast('Post deleted ', { icon: '🗑️' });
          })
          .catch((err) => {
            toast.error('Error occurred', { icon: '❌' });
          });

        setDeleted(true);
      }
    };
    const handleSave = () => {
      //yes or no
      postRef
        .update({
          content: contentRef.current.innerHTML,
          updatedAt: serverTimestamp(),
        })
        .then((res) => {
          setContentState(contentRef.current.innerHTML);
          toast.success('Post updated successfully!');
        });
      setUpdateMode(false);
      toggleDropDown();
    };
    const handleCancel = () => {
      contentRef.current.innerHTML = contentState;
      setUpdateMode(false);
      toggleDropDown();
    };

    const toggleDropDown = () => {
      setExpand(!expand);
    };
    const turnOnUpdateMode = () => {
      setUpdateMode(true);
      contentRef.current.focus();
    };
    let contentRef = useRef(null);
    return (
      <PostItemContainer deleted={deleted}>
        <PostItemHeaderContainer>
          <PostItemHeaderWrapper>
            <PostItemHeaderProfile>
              <PostItemHeaderAvt to={`/user/${authorId}`}>
                <Avatar src={avtUrl} size='30' padding='1' />
              </PostItemHeaderAvt>
              <PostHeaderNameAndTime>
                <PostItemHeaderName to={`/user/${authorId}`}>
                  {displayName}
                </PostItemHeaderName>
                <PostItemHeaderTime>{createdAt || 0}</PostItemHeaderTime>
              </PostHeaderNameAndTime>
              <NickName to={`/user/${authorId}`}>{nickname}</NickName>
            </PostItemHeaderProfile>

            <PostItemHeaderOptions>
              {myId === authorId && (
                <DropDown
                  handleDelete={handleDelete}
                  turnOnUpdateMode={turnOnUpdateMode}
                  handleCancel={handleCancel}
                  handleSave={handleSave}
                  expand={expand}
                  toggleDropDown={toggleDropDown}
                />
              )}
            </PostItemHeaderOptions>
          </PostItemHeaderWrapper>
        </PostItemHeaderContainer>

        <PostItemBodyContainer>
          <PostItemBodyWrapper
            contentEditable={updateMode}
            updateMode={updateMode}
            dangerouslySetInnerHTML={{ __html: contentState }}
            ref={(node) => (contentRef.current = node)}
            onKeyDown={(e) => {
              if (contentRef.current.innerHTML !== content) {
                setDirty(true);
              } else {
                setDirty(false);
              }
            }}
          ></PostItemBodyWrapper>
        </PostItemBodyContainer>
        <PostItemFooterContainer>
          <PostItemFooterWrapper>
            <LikeButton>
              <span>{likes}</span>
              {heartDoc?.exists ? (
                <span onClick={removeHeart}>💔</span>
              ) : (
                <span onClick={addHeart}>❤️</span>
              )}
              {/* <p>Like</p> */}
            </LikeButton>
            {/* <CommentButton onClick={handleComment}>
              <span>{commentsCount}</span>
              <span>🤡</span>
              <p>Comment</p>
            </CommentButton> */}
            {updateMode && dirty && (
              <SaveButton onClick={handleSave}>SavePost</SaveButton>
            )}
          </PostItemFooterWrapper>
        </PostItemFooterContainer>
      </PostItemContainer>
    );
  }
);

export default PostItem;

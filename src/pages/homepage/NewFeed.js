import React from 'react';
import PostsList from '../../features/posts/postsList';
import {
  CommentButton,
  LikeButton,
  NewFeedConainter,
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
  PostsListContainer,
} from './NewFeedElements';

const NewFeed = () => {
  return (
    <NewFeedConainter>
      <PostsListContainer>
        <PostItemContainer>
          <PostItemHeaderContainer>
            <PostItemHeaderWrapper>
              <PostItemHeaderProfile>
                <PostItemHeaderAvt
                src={require('../../images/mock-avt.png').default}
                ></PostItemHeaderAvt>
                <PostItemHeaderName>lvl162</PostItemHeaderName>
              </PostItemHeaderProfile>

              <PostItemHeaderOptions>...</PostItemHeaderOptions>
            </PostItemHeaderWrapper>
          </PostItemHeaderContainer>

          <PostItemBodyContainer>
            <PostItemBodyWrapper>cc</PostItemBodyWrapper>
          </PostItemBodyContainer>
          <PostItemFooterContainer>
            <PostItemFooterWrapper>
              <LikeButton>Like!</LikeButton>
              <CommentButton>Comment</CommentButton>
            </PostItemFooterWrapper>
          </PostItemFooterContainer>
        </PostItemContainer>
        <PostItemContainer>
          <PostsList />
        </PostItemContainer>
        <PostItemContainer>
          <PostsList />
        </PostItemContainer>
        <PostItemContainer>
          <PostsList />
        </PostItemContainer>
      </PostsListContainer>
    </NewFeedConainter>
  );
};

export default NewFeed;

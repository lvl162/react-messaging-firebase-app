import React, { useEffect, useState } from 'react';
import { fromMillis } from '../../lib/firebase';
import {
  PostsListContainer,
  PostEndMessage,
  LoadMoreButton,
} from './PostElements';
import Loading from '../../components/Loading';
import { docToPostItem } from '../../lib/helper';
const PostList = ({ postsRef }) => {
  const LIMIT = 10;
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [postsEnd, setPostsEnd] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
      const postsQuery = postsRef.limit(LIMIT);
      const posts = (await postsQuery.get()).docs;
      setPosts(posts);
      setLoading(false);
    };
    fetchPosts();
  }, [postsRef]);
  const getMorePosts = async () => {
    setLoading(true);
    const last = posts[posts.length - 1].data();
    const cursor =
      typeof last.createdAt === 'number'
        ? fromMillis(last.createdAt)
        : last.createdAt;

    const query = postsRef.startAfter(cursor).limit(LIMIT);

    const newPosts = (await query.get()).docs;

    setPosts(posts.concat(newPosts));
    setLoading(false);

    if (newPosts.length < LIMIT) {
      setPostsEnd(true);
    }
  };
  if (posts) {
    return (
      <>
        <PostsListContainer>
          {posts.map(docToPostItem)}
          {!loading && !postsEnd && (
            <LoadMoreButton onClick={getMorePosts}>
              {' '}
              Load more posts
            </LoadMoreButton>
          )}
          {loading && <Loading />}
          {postsEnd && (
            <PostEndMessage>You have reached the end!</PostEndMessage>
          )}
        </PostsListContainer>
      </>
    );
  }
};

export default PostList;

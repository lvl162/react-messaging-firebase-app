import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../auth/authSlice';
import ReactionButtons from './reactionButton';

const PostsList = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(signOut());
  };
  const posts = useSelector((state) => state.posts);
  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderedPosts = orderedPosts.map((post) => (
    <article className='post-excerpt' key={post.id}>
      <h3>{post.title}</h3>
      <p className='post-content'>{post.content.substring(0, 100)}</p>
      <ReactionButtons post={post} />
      <Link to={`/posts/${post.id}`} className='button muted-button'>
        View Post
      </Link>
    </article>
  ));

  return (
    <section className='posts-list'>
      <h2>Posts</h2>
      {renderedPosts}
      <Link to={`/message`} className='button muted-button'>
        Go to messenger
      </Link>
      <button onClick={handleLogout}>Logout</button>
    </section>
  );
};

export default PostsList;

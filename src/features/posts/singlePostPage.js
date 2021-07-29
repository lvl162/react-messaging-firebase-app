import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

const SinglePostPage = ({ match }) => {
  console.log('im in');
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );

  if (!post) {
    return <Redirect to='/404' />;
  }

  return (
    <section>
      <article className='post'>
        <h2>{post.title}</h2>
        <p className='post-content'>{post.content}</p>
        <Link to={`/editPost/${post.id}`} className='button'>
          Edit Post
        </Link>
      </article>
    </section>
  );
};
export default SinglePostPage;

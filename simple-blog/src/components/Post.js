import React from 'react';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <div>
      <h2>
        <Link to={`/post/${post.id}`}>{post.title}</Link>
      </h2>
      <p>{post.content}</p>
    </div>
  );
}

export default Post;
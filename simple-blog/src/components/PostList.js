import React, { useContext } from 'react';
import { BlogContext } from '../context/BlogContext';
import Post from './Post';
import NewPost from './NewPost';

function PostList() {
  const { posts } = useContext(BlogContext);

  return (
    <div>
      <NewPost />
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;
import React, { useState, useContext } from 'react';
import { BlogContext } from '../context/BlogContext';

function NewPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addPost } = useContext(BlogContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input 
          type="text" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div>
        <label>Content</label>
        <textarea 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
}

export default NewPost;
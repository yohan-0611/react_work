import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams, Link } from 'react-router-dom';
import { getPostById, updatePost } from '../services/postService';

function PostEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '' });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await getPostById(id);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post: ', error);
      }
    };

    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updatePost(id, post);
      navigate('/posts/' + id);
    } catch (error) {
      console.error('Error updating post: ', error);
    }
  };

  return (
    <div className="post-form-container">
      <h2>Edit Post</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>
        <div  className="form-group"> 
          <label>Content:</label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">수정하기</button>
        <Link to={`/posts/${id}`}>취소</Link>
      </form>
    </div>
  );
}

export default PostEdit;


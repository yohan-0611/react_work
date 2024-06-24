

  import React from 'react';
  import { useParams, Link } from 'react-router-dom';
  import { useNavigate } from 'react-router-dom';
  import { deletePost } from '../services/postService';

  function PostDelete() {
    const { id } = useParams();
    const navigate = useNavigate();
    
    const handleDelete = async () => {
      try {
        await deletePost(id);
        navigate('/');
      } catch (error) {
        console.error('Error deleting post: ', error);
      }
    };

    return (
      <div className="post-delete-container">
        <p>삭제하시겠습니까?</p>
        <button onClick={handleDelete}>삭제</button>
        <Link to={`/posts/${id}`}>취소</Link>
      </div>
    );
  }

  export default PostDelete;

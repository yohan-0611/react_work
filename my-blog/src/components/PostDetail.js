import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPostById, addComment, getCommentsByPostId, deleteComment } from '../services/postService';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [currentUserMemberId, setCurrentUserMemberId] = useState(null);

  useEffect(() => {
    const fetchPostAndComments = async () => {
      try {
        const postResponse = await getPostById(id);
        setPost(postResponse.data);

        const commentsResponse = await getCommentsByPostId(id);
        setComments(commentsResponse.data || []);

        // 로컬 스토리지에서 현재 사용자의 memberId 가져오기
        const storedMemberId = localStorage.getItem('memberId');
        setCurrentUserMemberId(storedMemberId);
      } catch (error) {
        console.error('Error fetching post and comments: ', error);
      }
    };

    fetchPostAndComments();
  }, [id]);

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addComment(id, { content: comment });
      setComments([...comments, response.data]);
      setComment('');
    } catch (error) {
      console.error('Error adding comment: ', error);
    }
  };

  const handleDeleteComment = async (commentId) => {
    try {
      await deleteComment(id, commentId); // postId와 commentId 전달
      const updatedComments = comments.filter(c => c.id !== commentId);
      setComments(updatedComments);
    } catch (error) {
      console.error('Error deleting comment: ', error);
    }
  };

  return (
    <div className="post-detail-container">
      <h2>Post Detail</h2>
      {post ? (
        <div className="post-content">
          <h3>제목 : {post.title}</h3>
          <p>내용 : {post.content}</p>
          {post.imageUrl && (
            <div className="post-image">
             <img
  src={`${process.env.PUBLIC_URL}/images/${post.imageUrl}`}
  alt={post.title}
  style={{ width: '200px', height: '200px' }}
/>
            </div>
          )}
          <h4>댓글</h4>
          <ul className="comment-list">
            {comments.map((c, index) => (
              <li key={index} className="comment-item">
                <span className="comment-author">{c.memberId}: </span>
                <span className="comment-content">{c.content}</span>
                {/* 자신이 작성한 댓글에만 삭제 버튼 표시 */}
                {currentUserMemberId === c.memberId && (
                  <button onClick={() => handleDeleteComment(c.id)} className="delete-comment-btn">삭제</button>
                )}
              </li>
            ))}
          </ul>
          <form onSubmit={handleCommentSubmit} className="comment-form">
            <textarea
              value={comment}
              onChange={handleCommentChange}
              placeholder="댓글을 작성하세요"
              required
              className="comment-input"
            />
            <button type="submit" className="submit-comment-btn">댓글 작성</button>
          </form>
          {/* 수정 및 삭제 링크 표시 */}
          {currentUserMemberId && currentUserMemberId === post.author && (
            <div className="post-actions">
              <Link to={`/edit/${id}`} className="edit-post-link">수정하기</Link>
              <Link to={`/delete/${id}`} className="delete-post-link">삭제하기</Link>
            </div>
          )}
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to="/" className="back-to-list-link">List로 돌아가기</Link>
    </div>
  );
}

export default PostDetail;

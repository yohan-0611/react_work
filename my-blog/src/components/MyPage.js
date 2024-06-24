import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllPosts } from '../services/postService';

const MyPage = () => {
  const [memberId, setMemberId] = useState('');
  const [userPosts, setUserPosts] = useState([]);
  const navigate = useNavigate(); // useNavigate hook 사용

  useEffect(() => {
    // 사용자 정보 가져오기
    const storedMemberId = localStorage.getItem('memberId');
    setMemberId(storedMemberId);

    // 사용자가 작성한 게시물 가져오기
    fetchUserPosts(storedMemberId);
  }, []);

  const fetchUserPosts = async (memberId) => {
    try {
      const response = await getAllPosts(); // 전체 게시물 가져오기
      const posts = response.data.filter(post => post.author === memberId); // 사용자가 작성한 게시물 필터링
      setUserPosts(posts);
      
    } catch (error) {
      console.error('Error fetching user posts: ', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('memberId');
    setMemberId('');
    navigate('/'); 
  };

  return (
    <div className="mypage-container">
      <h1 className="mypage-title">My Page</h1>
      <h2 className="welcome-message">환영합니다, {memberId}</h2>

      <h3 className="my-posts-title">내 게시글</h3>
      <ul className="my-posts">
        {userPosts.length > 0 ? (
          userPosts.map(post => (
            <li key={post.id} className="post-item">
              <div className="post-title-container">
                <Link to={`/posts/${post.id}`} className="post-link">{post.title}</Link>
              </div>
            </li>
          ))
        ) : (
          <li className="no-posts">No posts found.</li>
        )}
      </ul>

      <button onClick={handleLogout} className="logout-button">Logout</button>
      <Link to="/" className="back-link">홈으로 돌아가기</Link>
    </div>
  );
};

export default MyPage;

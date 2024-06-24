import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAllPosts } from '../services/postService';
import Chat from './Chat';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('title');
  const navigate = useNavigate();

  useEffect(() => {
    fetchPosts();
    checkLoginStatus();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await getAllPosts();
      setPosts(response.data.reverse());
    } catch (error) {
      console.error('Error fetching posts: ', error);
    }
  };

  const checkLoginStatus = () => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('memberId'); // memberId도 함께 삭제
    setIsLoggedIn(false);
    window.location.reload(); 
  };

  const handlePostClick = (postId) => {
    if (!isLoggedIn) {
      alert('로그인 후 이용해주세요.');
    } else {
      navigate(`/posts/${postId}`);
    }
  };

  const handleCreateClick = () => {
    if (!isLoggedIn) {
      alert('로그인 후 이용해주세요.');
    } else {
      navigate('/create');
    }
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let filteredPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  if (searchKeyword) {
    filteredPosts = posts.filter(post =>
      post[searchCriteria].toLowerCase().includes(searchKeyword.toLowerCase())
    );
  }

  const paginate = pageNumber => setCurrentPage(pageNumber);
  const memberId = localStorage.getItem('memberId');

  const handleSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  const handleCriteriaChange = (e) => {
    setSearchCriteria(e.target.value);
  };

  return (
    <div className="post-list-container">
      <h1>Post List</h1>
      {isLoggedIn && <span>사용자: {memberId}</span>}
      {isLoggedIn && <span onClick={handleMyPageClick} className="mypage-link">마이페이지</span>}
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchKeyword}
          onChange={handleSearchChange}
          placeholder="검색어 입력"
        />
        <select value={searchCriteria} onChange={handleCriteriaChange}>
          <option value="title">제목</option>
          <option value="author">작성자</option>
        </select>
      </form>
      <ul className="post-list">
        {filteredPosts.map(post => (
          <li key={post.id} className="post-item">
            <div className="post-title-container">
              <span
                onClick={() => handlePostClick(post.id)}
                className="post-title"
              >
                {post.title}
              </span>
              <span className="post-author">
                {post.author}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts.length}
        paginate={paginate}
        currentPage={currentPage}
      />
      {isLoggedIn ? (
        <>
          <button onClick={handleLogout} className="logout-button">Logout</button>
          <span onClick={handleCreateClick} className="create-link">글쓰기</span>
        </>
      ) : (
        <div className="auth-links">
          <Link to="/login" className="login-link">로그인</Link>
          <Link to="/signup" className="signup-link">회원가입</Link>
        </div>
      )}
    </div>
  );
};

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
            <span onClick={() => paginate(number)} className="page-link">
              {number}
            </span>
          </li>
        ))}
      </ul>
      <Chat />
    </nav>
  );
};

export default PostList;

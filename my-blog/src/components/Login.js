import React, { useState } from 'react';
import { login } from '../services/postService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login({ memberId, password });
      const { accessToken } = response.data;
      localStorage.setItem('token', accessToken ) ;
      localStorage.setItem('memberId', memberId ) ;
  
  
      navigate('/');
    } catch (error) {
      console.error('Error logging in: ', error);
      
      alert("아이디 패스워드 다시입력하세요");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token'); // 로그아웃 시에 localStorage에서 토큰 삭제
    localStorage.removeItem('memberId');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Login</button>
      </form>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { register } from '../services/postService';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [memberId, setMemberId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await register({ memberId, password });
      navigate('/login');
    } catch (error) {
      console.error('Error signing up: ', error);
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>

        <div>
          <label>Email:</label>
          <input type="email" value={memberId} onChange={(e) => setMemberId(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;

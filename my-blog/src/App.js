// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetail from './components/PostDetail';
import PostForm from './components/PostForm';
import PostEdit from './components/PostEdit';
import PostDelete from './components/PostDelete';
import PostList from './components/PostList';
import Login from './components/Login';
import Signup from './components/Signup';
import MyPage from './components/MyPage';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/create" element={<PostForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/edit/:id" element={<PostEdit />} />
        <Route path="/delete/:id" element={<PostDelete />} />
        <Route path="/mypage" element={<MyPage />} />
        
      </Routes>
    </Router>
  );
}

export default App;
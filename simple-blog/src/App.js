import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BlogProvider } from './context/BlogContext';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';

function App() {
  return (
    <BlogProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </Router>
    </BlogProvider>
  );
}

export default App;
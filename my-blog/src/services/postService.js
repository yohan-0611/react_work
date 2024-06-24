import axios from 'axios';

const BASE_URL = 'http://192.168.0.32/api/posts';
const AUTH = 'http://192.168.0.32/api/auth';

export const getAllPosts = () => {
  const token = localStorage.getItem('token');
  return axios.get(BASE_URL, { headers: { 'Authorization': `Bearer ${token}` } });
};

export const getPostById = (id) => {
  const token = localStorage.getItem('token');
  return axios.get(`${BASE_URL}/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
};

export const getCommentsByPostId = (postId) => {
  const token = localStorage.getItem('token');
  return axios.get(`${BASE_URL}/${postId}/comments`, { headers: { 'Authorization': `Bearer ${token}` } });
};

export const createPost = (formData) => {
  const token = localStorage.getItem('token');
  return axios.post(BASE_URL, formData, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  });
};

export const deletePost = (id) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${BASE_URL}/${id}`, { headers: { 'Authorization': `Bearer ${token}` } });
};

export const updatePost = (id, postData) => {
  const token = localStorage.getItem('token');
  return axios.put(`${BASE_URL}/${id}`, postData, { headers: { 'Authorization': `Bearer ${token}` } });
};

export const register = (userData) => axios.post(`${AUTH}/register`, userData);
export const logout = () => axios.post(`${AUTH}/logout`);
export const login = (userData) => axios.post(`${AUTH}/login`, userData);

export const addComment = (postId, content) => {
  const token = localStorage.getItem('token');
  const memberId = localStorage.getItem('memberId'); 
  return axios.post(
    `${BASE_URL}/${postId}/comments`,
    { ...content, memberId },
    { headers: { 'Authorization': `Bearer ${token}` } }
  );
};

export const deleteComment = (postId, commentId) => {
  const token = localStorage.getItem('token');
  return axios.delete(`${BASE_URL}/${postId}/comments/${commentId}`, {
    headers: { 'Authorization': `Bearer ${token}` }
  });
};

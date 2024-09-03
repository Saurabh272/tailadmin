import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getUsers = () => api.get('/users');
export const createUser = (userData: any) => api.post('/users', userData);
import axios from 'axios';

const API_URL = 'http://localhost:5152/api/Project';

const api = axios.create({
  baseURL: API_URL
});

export default api;

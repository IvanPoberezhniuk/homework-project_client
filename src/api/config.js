import axios from 'axios';

let instance = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  timeout: 3000,
});

export default instance;

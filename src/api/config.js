import axios from 'axios';

import state from '../redux/configureStore';

const instance = axios.create({
  baseURL: `http://localhost:8081/api/v1`,
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const { auth } = state.getState();

  config.headers.autorization = `Bearer ${auth.token}`;

  return config;
});

export default instance;

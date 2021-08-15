import axios from 'axios';

import state from '../redux/configureStore';

let instance = axios.create({
  baseURL: `http://localhost:8080/api/v1`,
  timeout: 30000,
});

instance.interceptors.request.use((config) => {
  const { auth } = state.getState();

  config.headers.autorization = `Bearer ${auth.token}`;

  return config;
});

instance.interceptors.response.use(
  (res) => {
    console.log('good response: ');
    console.log(res);
    return res;
  },
  (err) => {
    console.log('err response: ');
    console.log(err);
    return Promise.reject(err);
  }
);

export default instance;

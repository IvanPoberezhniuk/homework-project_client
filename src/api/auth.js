import axios from 'axios';

let instance = axios.create({
  baseURL: 'api',
});

const authAPI = {
  fetchProjects: axios.get('api/projects'),
  signup: function (credentials) {
    return instance.post('/signup', credentials)
      .then(response => response.data);
  },
  signin(credentials) {
    return instance.post('/signin', credentials)
      .then(response => response.data);
  },
  authMe (token) {
    instance.defaults.headers = { Authorization: `Bearer ${token}` };
    return instance.get('/authMe')
      .then(response => response.data);
  }
};

export default authAPI;

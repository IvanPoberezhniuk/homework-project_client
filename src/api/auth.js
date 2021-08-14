import instance from './config';

const authAPI = {
  signup: function (credentials) {
    return instance
      .post('/signup', credentials)
      .then((response) => response.data);
  },
  signin(credentials) {
    const res = instance.post('/signin', credentials).then((response) => {
      console.log(response.headers);
      return response.data;
    });
    return res;
  },
  authMe(token) {
    instance.defaults.headers = { Authorization: `Bearer ${token}` };
    return instance.get('/authMe').then((response) => response.data);
  },
};

export default authAPI;

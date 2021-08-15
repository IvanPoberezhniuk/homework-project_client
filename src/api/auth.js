import instance from './config';

const authAPI = {
  signup: function (credentials) {
    return instance
      .post('/signup', credentials)
      .then((response) => response.data);
  },
  signin(credentials) {
    const res = instance.post('/signin', credentials).then((response) => {
      return response;
    });

    return res;
  },
  signout(token, refreshtoken) {
    const res = instance
      .post('/signout', {}, { headers: { token, refreshtoken } })
      .then((response) => {
        return response;
      });

    return res;
  },
};

export default authAPI;

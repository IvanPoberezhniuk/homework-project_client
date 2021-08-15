import instance from './config';

const profileApi = {
  getProfile(token) {
    instance.defaults.headers = { Authorization: `Bearer ${token}` };
    return instance.get('/profile').then((response) => response.data);
  },
  editProfile(credentials) {
    return instance
      .patch('/profile', credentials)
      .then((response) => response.data);
  },

  getAvailableSkills() {
    return instance.get('/skills').then((response) => response.data);
  },
};

export default profileApi;

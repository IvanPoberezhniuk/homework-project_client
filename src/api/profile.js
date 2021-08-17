import instance from './config';

const profileApi = {
  getProfile(token) {
    instance.defaults.headers = { Authorization: `Bearer ${token}` };
    return instance.get('/profile').then((response) => response.data);
  },

  editProfile(credentials) {
    const { id } = { ...credentials };
    return instance
      .patch(`/users/${id}`, credentials)
      .then((response) => response.data);
  },

  getAvailableSkills() {
    return instance.get('/skills').then((response) => {
      return response.data;
    });
  },
};

export default profileApi;

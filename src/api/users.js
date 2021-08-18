import instance from './config';

const usersAPI = {
  fetchUsers() {
    return instance.get('/users');
  },
  addUser(user) {
    return instance.post('/users', user);
  },
  editUser(userId, payload) {
    return instance.patch(`/users/${userId}/role`, payload);
  },
  deleteUser(id) {
    return instance.delete(`/users/${id}`);
  },
  getProjects(id) {
    return instance.get(`/users/${id}/projects`);
  },
  getUserSkills(id) {
    return instance.get(`/users/${id}/skills`);
  },
};

export default usersAPI;

import instance from './config';

const usersAPI = {
  fetchUsers() {
    return instance.get('/users');
  },
  addUser(user) {
    return instance.post('/users', user);
  },
  editUser(user) {
    return instance.patch('/users', user);
  },
  deleteUser(id) {
    return instance.delete(`/users/${id}`);
  },
  getProjects(id) {
    return instance.get(`/users/${id}/projects`);
  }
};

export default usersAPI;

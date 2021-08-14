import instance from './config';

const usersAPI = {
  fetchUsers() {
    return instance.get('/api/users');
  },
  addUser(user) {
    return instance.post('/api/users', user);
  },
  editUser(user) {
    return instance.patch('/api/user', user);
  },
  deleteUser(id) {
    return instance.delete(`/api/user/${id}`);
  },
};

export default usersAPI;

import axios from 'axios';

const usersAPI = {
  fetchUsers() {
    return axios.get('/api/users');
  },
  addUser(user) {
    return axios.post('/api/users', user);
  },
  editUser(user) {
    return axios.patch('/api/user', user);
  },
  deleteUser(id) {
    return axios.delete(`/api/user/${id}`);
  },
};

export default usersAPI;

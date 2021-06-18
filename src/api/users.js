import axios from 'axios';

const usersAPI = {
  fetchUsers() {
    return axios.get('/api/users');
  },
  addUser(User) {
    return axios.post('/api/users', User);
  },
  editUser(User) {
    return axios.patch('/api/users', User);
  },
  deleteUser(id) {
    return axios.delete(`/api/users/${id}`);
  },
};

export default usersAPI;

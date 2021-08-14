import axios from 'axios';

let instance = axios.create({
  baseURL: 'http://127.0.0.1:8081/api/v1',
});

const usersAPI = {
  fetchUsers() {
    return instance.get('/users/users');
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

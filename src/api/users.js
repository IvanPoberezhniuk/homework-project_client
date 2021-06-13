import axios from 'axios';

const usersAPI = {
  fetchProjects: axios.get('api/projects'),
};

export default usersAPI;

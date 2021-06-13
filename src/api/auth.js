import axios from 'axios';

const authAPI = {
  fetchProjects: axios.get('api/projects'),
};

export default authAPI;

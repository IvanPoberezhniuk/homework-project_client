import axios from 'axios';

const projectsAPI = {
  fetchProjects() {
    return axios.get('/api/projects');
  },
};

export default projectsAPI;

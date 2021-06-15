import axios from 'axios';

const projectsAPI = {
  fetchProjects() {
    return axios.get('/api/projects');
  },
  addProject(project) {
    return axios.post('/api/projects', project);
  },
  editProject(project) {
    return axios.patch('/api/projects', project);
  },
  deleteProject(id) {
    return axios.delete(`/api/projects/${id}`);
  },
};

export default projectsAPI;

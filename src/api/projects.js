import axios from 'axios';

const projectsAPI = {
  fetchProjects() {
    return axios.get(`/api/projects`);
  },
  fetchProjectById(id) {
    console.log('id', id);
    return axios.get(`/api/project/${id}`);
  },
  addProject(payload) {
    return axios.post('/api/project', payload);
  },
  editProject(payload) {
    return axios.patch(`/api/project`, payload);
  },
  editProjectStatus(payload) {
    const { id, type } = payload;
    return axios.patch(`/api/project/${type}/${id}`);
  },
  deleteProjectById(payload) {
    const { id } = payload;
    return axios.delete(`/api/project/${id}`);
  },
};

export default projectsAPI;

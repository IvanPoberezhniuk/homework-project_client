import axios from 'axios';


let instance = axios.create({
  baseURL: 'http://127.0.0.1:8081/api/v1',
});

const projectsAPI = {
  fetchProjects() {
    return instance.get('/projects');
  },
  fetchProjectTeam(projectId) {
    return instance.get(`/projects/${projectId}/team`);
  },
  projectStart(projectId) {
    return instance.post(`/projects/${projectId}/start`, {});
  },
  projectFinish(projectId) {
    return instance.post(`/projects/${projectId}/finish`, {});
  },
  fetchProjectById(projectId) {
    return instance.get(`/projects/${projectId}`);
  },
  createProject(payload) {
    return instance.post('/projects', payload);
  },
  addEmployee(projectId, payload) {
    return instance.post(`/projects/${projectId}/team`, payload);
  },
  editProject(payload) {
    return axios.patch(`/api/project`, payload);
  },
  editProjectStatus(payload) {
    const { id, type } = payload;
    return axios.patch(`/api/project/${type}/${id}`);
  },
  deleteProjectById(projectId) {
    return instance.delete(`/projects/${projectId}`);
  },
};

export default projectsAPI;

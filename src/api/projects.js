import instance from './config';

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
    return instance.patch(`/projects`, payload);
  },
  editProjectStatus(payload) {
    const { id, type } = payload;
    return instance.patch(`/projects/${type}/${id}`);
  },
  deleteProjectById(projectId) {
    return instance.delete(`/projects/${projectId}`);
  },
};

export default projectsAPI;

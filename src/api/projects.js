import instance from './config';

const projectsAPI = {
  fetchProjects() {
    return instance.get(`/api/projects`);
  },
  fetchProjectById(id) {
    return instance.get(`/api/project/${id}`);
  },
  addProject(payload) {
    return instance.post('/api/project', payload);
  },
  editProject(payload) {
    return instance.patch(`/api/project`, payload);
  },
  editProjectStatus(payload) {
    const { id, type } = payload;
    return instance.patch(`/api/project/${type}/${id}`);
  },
  deleteProjectById(payload) {
    const { id } = payload;
    return instance.delete(`/api/project/${id}`);
  },
};

export default projectsAPI;

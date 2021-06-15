import faker from 'faker';
import { createServer, Factory, Model } from 'miragejs';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    models: {
      project: Model,
      user: Model,
    },
    factories: {
      project: Factory.extend({
        projectName(i) {
          return `Project ${i}`;
        },
        startDate() {
          return faker.date.past().toLocaleDateString();
        },
        endDate() {
          return faker.date.past().toLocaleDateString();
        },
        status(i) {
          const status = ['Idle', 'In Progress', 'Finished'];
          return status[i % status.length];
        },
        team(i) {
          const team = ['UA', 'BU', 'NL', 'USA'];
          return team[i % team.length];
        },
      }),
      user: Factory.extend({
        firstName() {
          return faker.name.firstName();
        },
        lastName() {
          return faker.name.lastName();
        },
        role(i) {
          const role = ['Admin', 'Guest', 'Developer', 'QA', 'Manager'];
          return role[i % role.length];
        },
        projects(i) {
          const project = ['project'];
          return project[i % project.length];
        },
      }),
    },
    seeds(server) {
      server.createList('project', 15);
      server.createList('user', 35);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 500;
      this.resource('movie');
      //  users
      this.get('/users', (schema) => {
        return schema.users.all();
      });

      //  projects
      this.get('/projects', (schema) => {
        return schema.projects.all();
      });
      this.post('/projects', (schema, { requestBody }) => {
        console.log(requestBody);
        const project = JSON.parse(requestBody);
        schema.projects.create({
          ...project,
          startDate: null,
          endDate: null,
          status: 'Idle',
        });

        return schema.projects.all();
      });
      this.patch('/projects', (schema, { requestBody }) => {
        const response = JSON.parse(requestBody);
        const project = schema.projects.find(response.id);
        project.update(response);

        return schema.projects.all();
      });
      this.delete('/projects/:id', (schema, { requestBody, params }) => {
        const project = schema.projects.find(params.id);
        project.destroy();

        return schema.projects.all();
      });
    },
  });
}

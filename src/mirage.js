import { createServer, Model } from 'miragejs';

import { rowsProjects, rowsUsers } from './mock';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    models: {
      movie: Model,
    },

    routes() {
      this.namespace = 'api';
      this.timing = 1000;
      this.resource('movie');

      this.get('/users', () => {
        return rowsUsers;
      });
      this.get('/projects', () => {
        return rowsProjects;
      });
    },
  });
}

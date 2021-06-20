import faker from 'faker';
import {
  createServer,
  Factory,
  hasMany,
  Model,
  Response,
  RestSerializer,
} from 'miragejs';

import { MODAL } from './router/ModalSwitcher';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    serializers: {
      project: RestSerializer.extend({
        include: ['users'],
        embed: true,
      }),
      user: RestSerializer.extend({
        include: ['project'],
        embed: true,
      }),
    },
    models: {
      user: Model.extend({}),
      project: Model.extend({
        users: hasMany(),
      }),
    },
    factories: {
      project: Factory.extend({
        projectName(i) {
          return `Project ${i}`;
        },
        startDate(i) {
          const random = faker.datatype.boolean();
          return random ? faker.date.past().toLocaleDateString() : null;
        },
        endDate(i, project) {
          const random = faker.datatype.boolean();
          const endDate = this.startDateА
            ? random && faker.date.future().toLocaleDateString()
            : null;

          return endDate;
        },
        status(i) {
          const status = ['Idle', 'In Progress', 'Finished'];
          return status[i % status.length];
        },
        afterCreate(project, server) {
          if (!project.users.length) {
            project.update({
              users: server.createList('user', faker.datatype.number(4)),
            });
          }
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
          const role = ['admin', 'guest', 'developer', 'qa', 'manager'];
          return role[i % role.length];
        },
        email(i) {
          const email = !i ? 'admin@admin.com' : faker.internet.email();
          return email;
        },
        password(i) {
          const password = !i ? 'Admin1234' : faker.internet.email();
          return password;
        },
      }),
    },
    seeds(server) {
      server.createList('project', 22);

      server.create('user', {
        firstName: 'Admin',
        lastName: 'Admin',
        role: 'admin',
        email: 'admin@gmail.com',
        password: 'Admin123',
        token: 'adminToken',
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 1000;
      //  users
      this.get('/users', (schema) => {
        return schema.users.all();
      });
      // projects
      this.get(
        '/project/:id',
        (schema, { params }) => {
          const project = schema.projects.find(params.id);
          return project;
        },
        { timing: 11111 }
      );
      //  project
      this.get('/projects', (schema) => {
        return schema.projects.all();
      });
      this.post('/project', (schema, { requestBody }) => {
        const project = JSON.parse(requestBody);
        const users = project.users.map((user) =>
          schema.users.findBy({ id: user.id })
        );
        schema.projects.create({
          projectName: project.projectName,
          users,
          startDate: null,
          endDate: null,
          status: 'Idle',
        });

        return schema.projects.all();
      });
      this.patch('/project', (schema, { requestBody }) => {
        const { id, projectName } = JSON.parse(requestBody);
        const project = schema.projects.find(id);

        project.update('projectName', projectName);

        return schema.projects.all();
      });
      this.patch('/project/:status/:id', (schema, { params }) => {
        const { id, status } = params;
        const project = schema.projects.find(id);

        switch (status) {
          case MODAL.START:
            const past = faker.date.past().toLocaleDateString();
            project.update('startDate', past);
            break;
          case MODAL.FINISH:
            const recent = faker.date.recent().toLocaleDateString();
            project.update({ endDate: recent });
            break;
          default:
            return null;
        }

        return schema.projects.all();
      });

      this.delete('/project/:id', (schema, { params }) => {
        const project = schema.projects.find(params.id);
        project.destroy();

        return schema.projects.all();
      });
      this.post('/signin', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let user = schema.users.findBy({
          email: attrs.email,
          password: attrs.password,
        });

        if (!user) {
          return new Response(
            401,
            {},
            { status_code: 3, message: 'Password or login is incorrect' }
          );
        }

        /* user.update({
          token: generateToken(),
        }) */

        return new Response(
          200,
          {},
          { status_code: 4, message: 'Successful', token: user.token }
        );
      });
      this.post('/signup', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        let user = schema.users.findBy({ email: attrs.email });

        if (user) {
          return new Response(
            409,
            {},
            { status_code: 2, message: 'User with this email already exist' }
          );
        } else {
          schema.users.create(attrs);
          return new Response(
            201,
            {},
            { status_code: 1, message: 'Successful created' }
          );
        }
      });
      this.get('/authMe', (schema, request) => {
        const token = request.requestHeaders.Authorization.split(' ')[1];
        if (!token) {
          return new Response(
            401,
            {},
            { status_code: 2, message: 'Token not found' }
          );
        }

        let user = schema.users.findBy({ token: token });

        if (!user) {
          return new Response(
            401,
            {},
            { status_code: 3, message: 'Invalid token' }
          );
        }

        return new Response(
          200,
          {},
          {
            status_code: 4,
            message: 'Success',
            profile: {
              id: user.id,
              firstName: user.firstName,
              lastName: user.lastName,
              role: user.role,
            },
          }
        );
      });
      this.get('/users');
    },
  });
}

import { createServer, Model, Response } from 'miragejs';
import { date } from 'yup/lib/locale';

import { rowsProjects, rowsUsers } from './mock';

export function makeServer({ environment = 'test' }) {
  return createServer({
    environment,
    models: {
      movie: Model,
      user: Model,
    },

    seeds(server) {
      server.create('user', {
        firstName: 'Admin',
        lastName: 'Admin',
        role: 'admin',
        email: 'admin@gmail.com',
        password: 'Admin123',
        token: 'adminToken',
      })
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
      this.post('/signin', (schema, request) => {
        console.log('signin');
        let attrs = JSON.parse(request.requestBody)
        console.log(attrs);
        let user = schema.users.findBy({ email: attrs.email, password: attrs.password });

        if (!user) {
          return new Response(401, {}, { status_code: 3, message: 'Password or login is incorrect'});
        }

        /* user.update({
          token: generateToken(),
        }) */

        return new Response(200, {}, {status_code: 4, message: 'Successful', token: user.token})
      });
      this.post('/signup', (schema, request) => {
        let attrs = JSON.parse(request.requestBody)
        let user = schema.users.findBy({ email: attrs.email });

        if (user) {
          return new Response(409, {}, { status_code: 2, message: 'User with this email already exist'});
        } else {
          schema.users.create(attrs);
          return new Response( 201, {}, { status_code: 1, message: 'Successful created'})
        }
      });
      this.get('/authMe', (schema, request) => {
        const token = request.requestHeaders.Authorization.split(' ')[1];
        if (!token) {
          return new Response(401, {}, { status_code: 2, message: 'Token not found' });
        }

        let user = schema.users.findBy({ token: token });

        if (!user) {
          return new Response(401, {}, { status_code: 3, message: 'Invalid token' });
        }

        return new Response(200, {}, {
          status_code: 4,
          message: 'Success',
          profile: {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            role: user.role
          }
        });
      });
      this.get('/users');
    },
  });
};


function generateToken() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 16; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}


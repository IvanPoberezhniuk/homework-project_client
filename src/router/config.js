import { lazy } from 'react';

import { Fallback } from 'components';

import ModalSwitcher from './ModalSwitcher';

const routes = [
  {
    path: '/',
    component: lazy(() => import('containers/pages/Dashboard')),
    exact: true,
    private: true,
    fallback: <Fallback />,
  },
  {
    path: '/signup',
    component: lazy(() => import('containers/pages/Signup')),
    exact: true,
    private: false,
    fallback: <Fallback />,
  },
  {
    path: '/signin',
    component: lazy(() => import('containers/pages/Signin')),
    exact: true,
    private: false,
    fallback: <Fallback />,
    partition: true,
  },
  {
    path: '/users',
    component: lazy(() => import('containers/pages/Users')),
    exact: true,
    private: true,
    fallback: <Fallback />,
  },
  {
    path: '/projects',
    component: lazy(() => import('containers/pages/Projects')),
    exact: true,
    private: true,
    fallback: <Fallback />,
  },
  {
    path: '/profile',
    component: lazy(() => import('containers/pages/Profile')),
    exact: false,
    private: true,
    fallback: <Fallback />,
  },
  {
    path: '/history/:id?',
    component: lazy(() => import('containers/pages/ProjectHistory')),
    exact: true,
    private: true,
    fallback: <Fallback />,
  },
  {
    path: '/timeline/:id?',
    component: lazy(() => import('containers/pages/ProjectTimeline')),
    exact: true,
    private: true,
    fallback: <Fallback />,
  },
  {
    path: '*',
    component: lazy(() => import('containers/pages/PageNotFound')),
    exact: true,
    private: false,
    fallback: <Fallback />,
  },
];

const modalRoutes = [
  {
    path: '/project/:type/:id?',
    component: ModalSwitcher,
    private: true,
    fallback: Fallback,
    exact: true,
  },
  {
    path: '/user/:type/:id?',
    component: ModalSwitcher,
    private: true,
    fallback: Fallback,
    exact: true,
  },
];

export { modalRoutes, routes };

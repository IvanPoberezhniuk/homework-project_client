import React, { lazy } from 'react';

export const routes = [
  {
    path: '/',
    component: lazy(() => import('../containers/pages/Dashboard')),
    exact: true,
    private: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/signup',
    component: lazy(() => import('../containers/pages/Signup')),
    exact: true,
    private: false,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/signin',
    component: lazy(() => import('../containers/pages/Signin')),
    exact: true,
    private: false,
    fallback: <div> Loading... </div>,
    partition: true,
  },
  {
    path: '/users',
    component: lazy(() => import('../containers/pages/Users')),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/projects',
    component: lazy(() => import('../containers/pages/Projects')),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/profile',
    component: lazy(() => import('../containers/pages/Profile')),
    exact: false,
    private: true,
    fallback: <div> Loading... </div>,
  },
  {
    path: '*',
    component: lazy(() => import('../containers/pages/PageNotFound')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
];

import React, { lazy } from 'react';

export const routes = [
  {
    path: '/signup',
    component: lazy(() => import('../containers/pages/Signup')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/signin',
    component: lazy(() => import('../containers/pages/Signin')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
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
    private: false,
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

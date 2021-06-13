import React, { lazy } from 'react';

export const routes = [
  {
    path: '/',
    exact: true,
    redirect: '/home',
    fallback: <div> Loading... </div>,
  },
  {
    path: '/home',
    component: lazy(() => import('../containers/pages/Home')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
    /* routes: [
      {
        path: '/home/signup',
        component: lazy(() => import('../containers/pages/Signup')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
      },
      {
        path: '/home/signin',
        component: lazy(() => import('../containers/pages/Signin')),
        exact: false,
        private: false,
        fallback: <div> Loading... </div>,
      },
    ], */
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
    path: '/signin',
    component: lazy(() => import('../containers/pages/Signin')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
  {
    path: '/signup',
    component: lazy(() => import('../containers/pages/Signup')),
    exact: false,
    private: false,
    fallback: <div> Loading... </div>,
  },
];

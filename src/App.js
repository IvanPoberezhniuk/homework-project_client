import React, { useEffect } from 'react';

import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';

import { makeServer } from './mirage';
import { authMe, setToken } from './redux/modules/auth';
import { routes } from './router/config';
import Router from './router/Router';

makeServer({ environment: 'development' });

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      dispatch(authMe({ token: token }));
      dispatch(setToken({ token: token }));
    }
  }, [dispatch]);

  return <Router routes={routes} />;
};

export default App;

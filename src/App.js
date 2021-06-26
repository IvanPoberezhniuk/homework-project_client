import React, { useEffect } from 'react';

import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';
import { makeServer } from './mirage';
import { setToken, authMe } from './redux/modules/auth';
import { getProfile } from './redux/modules/profile';
import { routes } from './router/config';
import Router from './router/Router';
import { Fallback } from './components';

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

  return  <Router routes={routes} />;
};

export default App;

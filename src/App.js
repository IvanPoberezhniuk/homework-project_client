import Router from './router/Router';

import { routes } from './router/config';
import { makeServer } from './mirage';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { authMe, setToken } from './redux/modules/auth';

makeServer({ environment: 'development' });

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = Cookies.get('token');
    dispatch(authMe({ token: token }));
    dispatch(setToken({ token: token }));
  }, [dispatch]);

  return <Router routes={routes} />;
};

export default App;

/* import { useEffect } from 'react';

import Cookies from 'js-cookie'; */
//import { makeServer } from 'mirage';
/* import { useDispatch } from 'react-redux';
import { authMe, setToken } from 'redux/modules/auth'; */
import { routes } from 'router/config';
import Router from 'router/Router';

// mirage.js
//makeServer({ environment: 'development' });

const App = () => {
  //const dispatch = useDispatch();

  /* useEffect(() => {
    const token = Cookies.get('token');
    if (token) {
      dispatch(authMe({ token: token }));
      dispatch(setToken({ token: token }));
    }
  }, [dispatch]); */

  return <Router routes={routes} />;
};

export default App;

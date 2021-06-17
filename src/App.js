import Router from './router/Router';

import { makeStyles } from '@material-ui/core/styles';

import { Header, Sidebar } from './components/';
import { routes } from './router/config';
import { makeServer } from './mirage';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { authMe, setToken } from './redux/modules/auth';


makeServer({ environment: 'development' });

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '48px',
    flexBasis: '100%',
  },
  container: {
    display: 'flex',
  },
}));

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  
  useEffect(() => {
    const token = Cookies.get('token');
    console.log(token);
    dispatch(authMe({ token: token }));
    dispatch(setToken({ token: token }));
  }, [dispatch])

  return <>
    <Header />
    <div className={classes.container}>
      <Sidebar />
      <main className={classes.main}>
      <Router routes={routes}/>
      </main>
    </div>
  </>

};

export default App;

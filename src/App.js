import Router from './router/Router';

import { makeStyles } from '@material-ui/core/styles';

import { Header, Sidebar } from './components/';
import { routes } from './router/config';
import { makeServer } from './mirage';

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
  //if auth -> dashboard
  //else -> signin

  // return <Router routes={routes} />;
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Sidebar />
        <main className={classes.main}>
          <Router routes={routes} />
        </main>
      </div>
    </>
  );
};

export default App;

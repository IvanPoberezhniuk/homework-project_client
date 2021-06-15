import { makeStyles } from '@material-ui/core/styles';

import { Header, Sidebar } from './components';
import { makeServer } from './mirage';
import { routes } from './router/config';
import Router from './router/Router';

makeServer({ environment: 'development' });

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '128px 48px 48px 48px',
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

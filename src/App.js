import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import { Header, Sidebar } from './components';
import { makeServer } from './mirage';
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

  return (
    <>
      <Header />
      <div className={classes.container}>
        <Sidebar />
        <main className={classes.main}>
          <Router />
        </main>
      </div>
    </>
  );
};

export default App;

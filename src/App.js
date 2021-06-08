import Router from './router/Router';
import '@fontsource/roboto';

import { makeStyles } from '@material-ui/core/styles';

import Header from './components/shared/header/Header';
import Sidebar from './components/shared/sidebar/Sidebar';
import { routes } from './router/config';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '48px 48px 48px 147px',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <aside>
        <Sidebar />
      </aside>
      <main className={classes.main}>
        <Router routes={routes} />
      </main>
    </div>
  );
};

export default App;

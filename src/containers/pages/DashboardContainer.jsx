import { makeStyles } from '@material-ui/core/styles';

import { Header, Sidebar } from '../../components';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '48px',
    flexBasis: '100%',
  },
  container: {
    display: 'flex',
  },
}));

const DashboardContainer = ({ route, ...props }) => {
  const classes = useStyles();
  return (
    <>
      <Header />
      <div className={classes.container}>
        <Sidebar />
        <main className={classes.main}>
          <route.component routes={route.routes} {...props} />
        </main>
      </div>
    </>
  );
};

export default DashboardContainer;

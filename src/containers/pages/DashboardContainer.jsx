import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';

import { Header, Sidebar } from '../../components';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '128px 48px',
    flexBasis: '100%',
  },
  container: {
    display: 'flex',
  },
}));

const DashboardContainer = ({ route, ...props }) => {
  const classes = useStyles();
  const profile = useSelector((state) => state.auth.profile);

  return (
    <>
      <Header
        user={{
          firstName: profile.firstName,
          lastName: profile.lastName,
          role: profile.role,
        }}
      />
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

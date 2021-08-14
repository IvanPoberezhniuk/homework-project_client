import { Header, Sidebar } from 'components';
import { useSelector } from 'react-redux';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '128px 48px',
    flexBasis: '100%',
    background: '#fff',
    height: '100vh',
  },
  container: {
    display: 'flex',
  },
}));

const DashboardContainer = ({ route, ...props }) => {
  const classes = useStyles();
  const profile = useSelector((state) => state.profile.profile);

  return (
    <>
      <Header
        profile={{
          firstName: profile?.firstName,
          lastName: profile?.lastName,
          role: profile?.role,
        }}
      />
      <div className={classes.container}>
        <Sidebar role={profile?.role} />
        <main className={classes.main}>
          <route.component routes={route.routes} {...props} />
        </main>
      </div>
    </>
  );
};

export default DashboardContainer;

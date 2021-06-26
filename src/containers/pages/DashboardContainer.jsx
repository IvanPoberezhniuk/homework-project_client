import { makeStyles } from '@material-ui/core/styles';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Fallback, Header, Sidebar } from '../../components';

const useStyles = makeStyles((theme) => ({
  main: {
    padding: '128px 48px',
    flexBasis: '100%',
    background: '#fff',
    height: '100vh'
  },
  container: {
    display: 'flex',
  },
}));

const DashboardContainer = ({ route, ...props }) => {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.profile.isLoading);
  const profile = useSelector((state) => state.profile.profile);
  const history = useHistory();

  const signOut = () => {
    Cookies.remove('token')
    history.go();
  };

  return (
    <>
      <Header
        user={{
          firstName: profile.firstName,
          lastName: profile.lastName,
          role: profile.role,
        }}
        signOutHandler={signOut}
      />
      <div className={classes.container}>
        <Sidebar role={profile.role} />
        <main className={classes.main}>
          <route.component routes={route.routes} {...props} />
        </main>
      </div>
    </>
  );
};

export default DashboardContainer;

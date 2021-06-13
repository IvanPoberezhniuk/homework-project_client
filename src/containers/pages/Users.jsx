import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UsersTable from '../modules/usersTable/UsersTable';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 0 40px 0',
  },
}));

const Users = () => {
  const classes = useStyles();

  return (
    <>
      <Typography variant='h5' component='h1' className={classes.root}>
        Users
      </Typography>
      <UsersTable />
    </>
  );
};

export default Users;

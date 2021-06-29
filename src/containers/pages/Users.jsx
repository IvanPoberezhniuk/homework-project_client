import { useEffect } from 'react';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import UsersTable from '../modules/usersTable/UsersTable';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../redux/modules/users';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 0 40px 0',
  },
}));

const Users = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.list);
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <>
      <Typography variant='h5' component='h1' className={classes.root}>
        Users
      </Typography>
      <UsersTable rows={users} />
    </>
  );
};

export default Users;

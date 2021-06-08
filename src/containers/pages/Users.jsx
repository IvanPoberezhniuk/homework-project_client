import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '../../components/button/Button';
import UsersTable from '../../components/usersTable/UsersTable';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 0 40px 0',
  },
  buttonRoot: {
    width: '220px',
    textTransform: 'none',
  },
}));

const Users = () => {
  const classes = useStyles();

  return (
    <>
      <Grid
        container
        direction='row'
        justify='space-between'
        className={classes.root}
      >
        <Typography variant='h5' component='h1'>
          Projects
        </Typography>
        <Button color='primary' className={classes.buttonRoot}>Create Project</Button>
      </Grid>
      <UsersTable />
    </>
  );
};

export default Users;

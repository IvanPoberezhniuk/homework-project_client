import ArrowDown from 'assets/icons/arrow-down.svg';
import { Avatar, Button, Menu } from 'components';
import { useHistory } from 'react-router-dom';

import { Grid, IconButton, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  arrowDown: {
    width: '16px',
    height: '9.5px',
    transform: 'rotateX(180deg)',
    marginLeft: '5px',
  },
  avatar: {
    width: '48px',
    height: '48px',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    verticalAlign: 'middle',
  },
  container: {
    minHeight: '160px',
    minWidth: '180px',
  },
}));

const HeaderLoginMenu = ({
  handleMenu,
  handleClose,
  open,
  anchorEl,
  name,
  iconLabel = '',
  role,
  signOutHandler,
}) => {
  const classes = useStyles();

  const history = useHistory();

  return (
    <div>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <Avatar>{iconLabel}</Avatar>
        <img src={ArrowDown} className={classes.arrowDown} alt='drop down' />
      </IconButton>
      <Menu
        elevation={0}
        id='menu-appbar'
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        getContentAnchorEl={null}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        transformOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Grid
          container
          direction='column'
          justifyContent='space-between'
          alignItems='center'
          className={classes.container}
        >
          <Grid container>
            <Grid item>
              <Typography variant='h6' noWrap>
                Hello, {name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction='column' spacing={1}>
            <Grid item>
              {role !== 'admin' && (
                <Button
                  color='primary'
                  fullWidth
                  onClick={() => {
                    history.push('/profile');
                  }}
                >
                  Edit Profile
                </Button>
              )}
            </Grid>
            <Grid item>
              <Button color='primary' fullWidth onClick={signOutHandler}>
                Sign Out
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

export default HeaderLoginMenu;

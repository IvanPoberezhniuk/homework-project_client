import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

import Menu from '../../menu/Menu';
import { Button } from '../../button/Button';
import ArrowDown from '../../../assets/icons/arrow-down.svg';

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
  },
}));

const HeaderLoginMenu = ({ handleMenu, handleClose, open, anchorEl, name }) => {
  const classes = useStyles();

  return (
    <div>
      <IconButton
        aria-label='account of current user'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleMenu}
        color='inherit'
      >
        <div className={classes.avatar}>IP</div>
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
        className={classes.menu}
      >
        <Grid
          container
          direction='column'
          justify='space-between'
          alignItems='center'
          className={classes.container}
        >
          <Grid container xs={12}>
            <Grid item>
              <Typography variant='h6' noWrap>
                Hello, {name}
              </Typography>
            </Grid>
          </Grid>
          <Grid container direction='column' spacing={1}>
            <Grid item>
              <Button color='primary' fullWidth>
                Edit Profile
              </Button>
            </Grid>
            <Grid item>
              <Button color='primary' fullWidth>
                Sign In
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Menu>
    </div>
  );
};

export default HeaderLoginMenu;

import React from 'react';

import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '../..';
import AppBar from '../../appBar/AppBar';
import HeaderLoginMenu from './HeaderLoginMenu';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 111111,
  },
  toolbar: {
    justifyContent: 'flex-end',
    height: '80px',
  },
}));

const Header = ({ user }) => {
  const name = 'TestUser';
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" color="default" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <HeaderLoginMenu
          handleMenu={handleMenu}
          handleClose={handleClose}
          name={`${user.firstName} ${user.lastName}`}
          iconLabel={`${user.firstName[0]}${user.lastName[0]}`.toUpperCase()}
          role={user.role}
          open={open}
          anchorEl={anchorEl}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

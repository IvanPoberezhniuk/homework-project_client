import React from 'react';

import { useDispatch } from 'react-redux';
import { signout } from 'redux/modules/auth';

import { Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

const Header = ({ profile }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onSignOut = async () => {
    await dispatch(signout());
  };

  const generateLable = (strOne, strTwo) => {
    return `${strOne[0]}${strTwo[0]}`.toUpperCase();
  };

  return (
    <AppBar position='fixed' color='default' className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <HeaderLoginMenu
          handleMenu={handleMenu}
          handleClose={handleClose}
          name={profile.firstName ? `${profile.firstName}` : `No Name`}
          iconLabel={
            profile.firstName && profile.lastName
              ? generateLable(profile.firstName, profile.lastName)
              : ''
          }
          role={profile.role ? profile.role : 'No Role'}
          open={open}
          anchorEl={anchorEl}
          signOutHandler={onSignOut}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;

import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';

import HeaderLoginMenu from './HeaderLoginMenu';

import Button from '../../button/Button';

import AppBar from '../../appBar/AppBar';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    justifyContent: 'flex-end',
    height: '80px',
  },
}));

const Header = ({ isAuth = true }) => {
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
    <AppBar position='static' color='default'>
      <Toolbar className={classes.toolbar}>
        {isAuth ? (
          <HeaderLoginMenu
            handleMenu={handleMenu}
            handleClose={handleClose}
            name={name}
            open={open}
            anchorEl={anchorEl}
          />
        ) : (
          <Button color='primary'>LogIn</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;

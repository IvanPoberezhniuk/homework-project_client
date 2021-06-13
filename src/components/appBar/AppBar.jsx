import React from 'react';

import MUIAppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.secondary.main,
    height: '80px',
  },
}));

const AppBar = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;
  return (
    <MUIAppBar className={classes.root} {...other}>
      {children}
    </MUIAppBar>
  );
};

export default AppBar;

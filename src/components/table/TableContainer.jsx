import React from 'react';
import MUITableContainer from '@material-ui/core/TableContainer';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderRadius: 0,
    boxShadow: 'none',
  },
});

const TableContainer = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUITableContainer className={classes.root} {...other}>
      {children}
    </MUITableContainer>
  );
};

export default TableContainer;

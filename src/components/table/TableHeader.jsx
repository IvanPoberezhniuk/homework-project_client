import React from 'react';
import MUITableHead from '@material-ui/core/TableHead';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#EFEFEF',
  },
});

const TableHeader = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUITableHead className={classes.root} {...other}>
      {children}
    </MUITableHead>
  );
};

export default TableHeader;

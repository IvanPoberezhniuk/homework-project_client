import React from 'react';
import MUITableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    borderBottom: 'none',
  },
});

const TableCell = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUITableCell className={classes.root} {...other}>
      {children}
    </MUITableCell>
  );
};

export default TableCell;

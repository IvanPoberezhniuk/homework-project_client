import React from 'react';

import { Select as MUISelect } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  outlined: {
    fontWeight: 400,
    borderRadius: 0,
    background: '#F4F4F4',
    padding: '9px',
    minWidth: '252px',
  },
  select: {
    minWidth: '252px',
  },
}));

const Select = ({ children, ...other }) => {
  const classes = useStyles();

  return (
    <MUISelect
      classes={{ root: classes.root, select: classes.select }}
      variant='outlined'
      {...other}
    >
      {children}
    </MUISelect>
  );
};

export default Select;

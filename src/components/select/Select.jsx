import React from 'react';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Select = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <div>
      <Select className={classes.root} {...other} native>
        {children}
      </Select>
    </div>
  );
};

export default Select;

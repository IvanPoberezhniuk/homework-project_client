import React from 'react';

import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ButtonLoader = () => {
  const classes = useStyles();

  return <CircularProgress size={24} className={classes.buttonProgress} />;
};

export default ButtonLoader;

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  error: {
    paddingTop: '8px',
    color: '#FF0000',
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: '400',
  }
}));

const ValidationErrorMsg = ({ message, ...props }) => {
  const classes = useStyles();
  return <div className={classes.error} {...props}>{message}</div>
}

export default ValidationErrorMsg;
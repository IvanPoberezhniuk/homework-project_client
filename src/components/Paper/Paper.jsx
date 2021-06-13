import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Children } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export const CustomPaper = ({ children}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={0} children={ children } />
      <Paper />
      <Paper elevation={3} />
    </div>
  );
}

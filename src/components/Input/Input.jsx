import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import FilledInput from '@material-ui/core/FilledInput';

const styles = {
  root: {
    background: '#F4F4F4',
    width: '322px',
    height: '40px',
    borderRadius: 0,
    border: '1px solid #CCCCCC',
    color: '#000000',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '18px',
  },
  input: {
    padding: "0",
  },
  isLength: {
    width: '713px',
  }
}

export const Input = withStyles(styles)(( {placeholder, isLength=false, classes} )=> {
  let className = isLength ? clsx(classes.root, classes.input, classes.isLength) : clsx(classes.root, classes.input);
  return (
    <FilledInput disableUnderline={true}
    margin = 'none'
    className={className}
    placeholder={placeholder}/>
  );
});
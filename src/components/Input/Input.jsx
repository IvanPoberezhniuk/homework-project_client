import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';

const styles = {
  root: {
    background: '#F4F4F4',
    height: '40px',
    borderRadius: 0,
    border: '1px solid #CCCCCC',
    color: '#000000',
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '18px',
  },
  input: {
    padding: '9px 16px 10px',
    '&::placeholder': {
      color: '#777777',
      opacity: 1,
    }
  }
}

export const Input = withStyles(styles)(( {placeholder, classes} )=> {
  return (
    <FilledInput disableUnderline={true}
    margin = 'none'
    fullWidth='true'
    classes={{input: classes.input, root: classes.root}}
    placeholder={placeholder}/>
  );
});
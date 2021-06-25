import { forwardRef } from 'react';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  input: {
    padding: '9px 16px 10px',
    fontSize: '18px',
    '&::placeholder': {
      color: '#777777',
      opacity: 1,
    },
  },
  error: {
    color: '#000',
  },
  errorText: {
    '&.Mui-error': {
      paddingTop: '8px',
      color: '#FF0000',
      fontSize: '12px',
      lineHeight: '14px',
      fontWeight: '400',
    },
  },
}));

const Input = forwardRef(({ ...other }) => {
  const classes = useStyles();

  return (
    <TextField
      margin='none'
      fullWidth={true}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input,
        },
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.errorText,
        },
      }}
      classes={{
        error: classes.error,
      }}
      {...other}
    />
  );
});

export default Input;

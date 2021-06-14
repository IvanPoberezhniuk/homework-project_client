import { makeStyles } from '@material-ui/core/styles';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles(() => ({
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
  }
}));

const Input = ({ ...other }) => {
  const classes = useStyles();
  return (
    <TextField
      margin='none'
      fullWidth={true}
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.input,
        }
      }}
      FormHelperTextProps={{
        classes: {
          root: classes.errorText,
        }
      }}
      classes={{
        root: classes.root,
        error: classes.error,
      }}
      {...other}
    />
  );
};

export default Input;

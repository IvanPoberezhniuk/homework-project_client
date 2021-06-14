import { makeStyles } from '@material-ui/core/styles';
import { FilledInput } from '@material-ui/core';

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
    '&::placeholder': {
      color: '#777777',
      opacity: 1,
    },
  },
  error: {
    paddingTop: '8px',
    color: '#FF0000',
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: '400',
  },
}));

const Input = ({ ...other }) => {
  const classes = useStyles();
  return (
    <FilledInput
      disableUnderline={true}
      margin='none'
      fullWidth={true}
      classes={{ input: classes.input, root: classes.root }}
      {...other}
    />
  );
};

export default Input;

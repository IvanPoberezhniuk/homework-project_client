import MUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    height: '37px',
    padding: '0 30px',
    boxShadow: 'none',
    textTransform: 'none',
  },
  hover: {
    background: '#02CC67',
  },
  containedSecondary: {
    background: theme.palette.secondary.darker,
  },
}));

const Button = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUIButton
      classes={{
        root: classes.root,
        containedSecondary: classes.containedSecondary,
      }}
      variant='contained'
      {...other}
    >
      {children}
    </MUIButton>
  );
};

export default Button;

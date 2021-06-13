import MUIButton from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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
}));

const Button = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUIButton className={classes.root} variant='contained' {...other}>
      {children}
    </MUIButton>
  );
};

Button.propTypes = {};

export default Button;

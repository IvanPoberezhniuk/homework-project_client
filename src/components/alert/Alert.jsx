import { makeStyles } from '@material-ui/core/styles';
import MUIAlert from '@material-ui/lab/Alert';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const useStyles = makeStyles(() => ({
  root: {
    color: styledBy('severity', {
      error: '#FF0000',
    }),
    borderRadius: '0',
    borderLeft: '4px solid ',
    fontWeight: 'bold',
  },
}));

const Alert = (props) => {
  const classes = useStyles(props);

  const { children, ...other } = props;
  return (
    <MUIAlert className={classes.root} {...other}>
      {children}
    </MUIAlert>
  );
};

export default Alert;

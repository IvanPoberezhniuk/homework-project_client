import { makeStyles } from '@material-ui/core/styles';
import MUIPaper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

const Paper = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <MUIPaper elevation={0} children={children} />
      <MUIPaper />
      <MUIPaper elevation={3} />
    </div>
  );
};

export default Paper;

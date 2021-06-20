import Loader from 'react-loaders';
import './Fallback.scss';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: '30px',
  },
}));

const Fallback = () => {
  const classes = useStyles();
  return <Loader className={classes.root} type='pacman' active></Loader>;
};

export default Fallback;

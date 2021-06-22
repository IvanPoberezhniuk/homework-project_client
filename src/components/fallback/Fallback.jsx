import Loader from 'react-loaders';
import './Fallback.scss';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: '30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Fallback = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Loader className={classes.root} type='pacman' active></Loader>
    </div>
  );
};

export default Fallback;
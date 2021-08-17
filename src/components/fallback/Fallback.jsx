import './Fallback.scss';

import Loader from 'react-loaders';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(() => ({
  root: {
    paddingLeft: '30px',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '50vh',
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

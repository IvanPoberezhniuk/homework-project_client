import { withStyles } from '@material-ui/core/styles';
import MUImenu from '@material-ui/core/Menu';

const styles = {
  paper: {
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    marginTop: '30px',
    backgroundColor: '#F4F4F4',
    overflow: 'initial',
    padding: '16px',
    minHeight: '180px',
    minWidth: '183px',

    '&::before': {
      content: '""',
      width: 0,
      height: 0,
      position: 'absolute',
      right: '45px',
      top: '-20px',
      zIndex: 22222,
      border: '10px solid transparent',
      borderBottomColor: '#F4F4F4',
    },
  },
};

const Menu = (props) => {
  const { children, ...other } = props;
  return (
    <MUImenu elevation={0} {...other}>
      {children}
    </MUImenu>
  );
};

export default withStyles(styles)(Menu);

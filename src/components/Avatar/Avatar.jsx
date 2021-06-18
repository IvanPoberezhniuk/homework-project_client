import MUIAvatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  avatar: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '48px',
    height: '48px',
    fontSize: '18px',
    fontWeigh: 500,
    lineHeight: '21px',
  },
  name: {
    paddingLeft: '16px',
    fontWeight: 600,
    color: '#000',
    margin: 0,
  },
}));

const Avatar = ({ firstName, lastName, isShowName, children, ...other }) => {
  const classes = useStyles();
  return (
    <MUIAvatar className={classes.avatar} {...other}>
      {children}
    </MUIAvatar>
  );
};

export default Avatar;

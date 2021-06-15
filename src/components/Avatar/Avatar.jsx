import { makeStyles } from '@material-ui/core/styles';
import MUIAvatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  avatar: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '48px',
    height: '48px',
  },
}));

const Avatar = ({children, ...other }) => {
  const classes = useStyles();
  return (
    <MUIAvatar className={classes.avatar}>{children}</MUIAvatar>
  );
};

export default Avatar;

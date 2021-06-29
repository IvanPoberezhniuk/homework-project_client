import { Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '32px',
    height: '32px',
    fontSize: '14px',
    backgroundColor: theme.palette.primary.main,
  },
}));

const TableTeamAvatar = ({ children, className, ...other }) => {
  const classes = useStyles();
  return (
    <Avatar
      alt='Remy Sharp'
      src='/static/images/avatar/1.jpg'
      className={classes.root}
      {...other}
    >
      {children}
    </Avatar>
  );
};

export default TableTeamAvatar;

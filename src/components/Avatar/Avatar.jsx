import { makeStyles } from '@material-ui/core/styles';

import MUIAvatar from '@material-ui/core/Avatar';

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
    fontWeigh: 500,
    lineHeight: '21px',
  },
  name: {
    paddingLeft: '16px',
    fontWeight: 600,
    fontSize: '18px',
    color: '#000',
    margin: 0,
  },
}));

const Avatar = ({ firstName, lastName, isShowName, ...props }) => {
  const classes = useStyles();
  const avatarLabel = (firstName[0] + lastName[0]).toUpperCase();
  return (
    <div className={classes.container}>
      <MUIAvatar className={classes.avatar}>{avatarLabel}</MUIAvatar>
      {isShowName && (
        <p className={classes.name}>
          {firstName} {lastName}
        </p>
      )}
    </div>
  );
};

export default Avatar;

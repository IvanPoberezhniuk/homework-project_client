import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center'
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
  }
}));

const CustomAvatar = ({ firstName, lastName, isShowName, ...props }) => {
  const classes = useStyles();
  const avatarLabel = (firstName[0] + lastName[0]).toUpperCase();
  return (
    <div className={classes.container}>
      <Avatar className={classes.avatar}>{avatarLabel}</Avatar>
      {isShowName && <p className={classes.name}> {firstName} {lastName}</p>}
    </div>
  )
}

export default CustomAvatar;
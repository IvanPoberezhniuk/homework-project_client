import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '32px',
    height: '32px',
    fontSize: '18px',
  },
}));

const TableTeamAvatar = ({ children, ...other }) => {
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

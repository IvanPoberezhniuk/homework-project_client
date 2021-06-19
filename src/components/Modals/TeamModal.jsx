import React from 'react';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Avatar, Button } from '..';

const useStyles = makeStyles(() => ({
  container: {
    background: '#bfbfbf',
  },
  paper: {
    padding: '40px 32px',
    margin: 0,
    borderRadius: '6px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
  },
  titleWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    padding: '0 0 0 10px',
    '& .MuiTypography-h6': {
      lineHeight: '42px',
      fontWeight: 400,
      fontSize: '36px',
    },
  },
  contentWrapper: {
    padding: '32px 0',
    textAlign: 'center',
  },
  actions: {
    padding: 0,
  },
  actionsSpacing: {
    '& > :not(:first-child)': {
      marginLeft: '33px',
    },
  },
  btn: {
    width: '322px',
  },
  avatarWrapper: {
    padding: '8px 0',
    display: 'flex',
    alignItems: 'center',
  },
  avatarName: {
    paddingLeft: '16px',
    fontWeight: 600,
    fontSize: '18px',
    color: '#000',
    margin: 0,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const TeamModal = ({ teamList, isLoading, ...props }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClose = () => {
    setOpen(false);
  };

  let team = teamList.map((employee) => (
    <div className={classes.itemWrapper}>
      <div className={classes.avatarWrapper}>
        <Avatar>
          {(employee.firstName[0] + employee.lastName[0]).toUpperCase()}
        </Avatar>
        <p className={classes.avatarName}>
          {employee.firstName} {employee.lastName}
        </p>
      </div>
    </div>
  ));

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        classes={{ paper: classes.paper, container: classes.container }}
      >
        <DialogTitle
          id='alert-dialog-slide-title'
          classes={{ root: classes.title }}
        >
          Team
        </DialogTitle>
        <DialogContent classes={{ root: classes.contentWrapper }}>
          {team}
        </DialogContent>
        <DialogActions
          classes={{ root: classes.actions, spacing: classes.actionsSpacing }}
        >
          <Button
            color='primary'
            classes={{ root: classes.btn }}
            onClick={handleClose}
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default TeamModal;

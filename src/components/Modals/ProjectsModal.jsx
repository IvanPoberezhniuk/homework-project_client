import React from 'react';

import { Avatar, Button } from 'components';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
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

const ProjectsModal = ({
  open = true,
  handleClose,
  isLoading,
  user,
  ...props
}) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        classes={{ paper: classes.paper }}
      >
        <DialogTitle
          id='alert-dialog-slide-title'
          classes={{ root: classes.title }}
        >
          Projects
        </DialogTitle>
        <DialogContent classes={{ root: classes.contentWrapper }}>
          {user.project &&
            [
              { projectName: 'project 1' },
              { projectName: 'project 2' },
              { projectName: 'project 3' },
            ].map((project) => (
              <div className={classes.itemWrapper}>
                <div className={classes.avatarWrapper}>
                  <Avatar key={project.id}>
                    {project.projectName[0].toUpperCase()}
                  </Avatar>
                  <p className={classes.avatarName}>{project.projectName}</p>
                </div>
              </div>
            ))}
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

export default ProjectsModal;

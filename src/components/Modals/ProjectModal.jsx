import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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
  title: {
    padding: '0 0 0 10px',
    '& .MuiTypography-h6': {
      lineHeight: '42px',
      fontWeight: 400,
      fontSize: '36px',
    }
  },
  contentWrapper: {
    marginTop: '35px',
    padding: 0,
    textAlign: 'center',
  },
  actions: {
    padding: 0,
  },
  actionsSpacing: {
    '& > :not(:first-child)': {
      marginLeft: '33px',
    }
  },
  paperWidthMd: {
    maxWidth: '713px',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const ProjectModal = ({ title, content, ...props }) => {
  const [open, setOpen] = React.useState(true);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {<Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{
          paper: classes.paper,
          container: classes.container,
          paperWidthMd: classes.paperWidthMd,
        }}
        maxWidth='md'
      >
        <div className={classes.titleWrapper}>
          <DialogTitle id="alert-dialog-slide-title" classes={{ root: classes.title}}>
            {title}
          </DialogTitle>
        </div>
        <DialogContent classes={{ root: classes.contentWrapper }}>
          {content}
        </DialogContent>
      </Dialog>
      }
    </div>
  );
}

export default ProjectModal;
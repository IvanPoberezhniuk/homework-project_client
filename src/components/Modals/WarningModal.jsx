import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SvgIcon from '@material-ui/core/SvgIcon';
import Slide from '@material-ui/core/Slide';

import { ReactComponent as WarningIcon } from './../../assets/icons/warning.svg';
import { Button } from '../Button/Button';

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
    }
  },
  contentWrapper: {
    padding: '40px 0',
    textAlign: 'center',
  },
  content: {
    margin: 0,
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '21px',
    color: '#000',
  },
  actions: {
    padding: 0,
  },
  actionsSpacing: {
    '& > :not(:first-child)': {
      marginLeft: '33px',
    }
  },
  btn: {
    width: '215px',
  }
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

export const WarningModal = ({ description }) => {
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
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
        classes={{ paper: classes.paper, container: classes.container}}
      >
        <div className={classes.titleWrapper}>
          <SvgIcon>
              <WarningIcon />
            </SvgIcon>
          <DialogTitle id="alert-dialog-slide-title" classes={{ root: classes.title}}>
            Warning
          </DialogTitle>
        </div>
        <DialogContent classes={{root: classes.contentWrapper}}>
          <DialogContentText id="alert-dialog-slide-description" classes={{root: classes.content}}>
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions classes={{root: classes.actions,spacing: classes.actionsSpacing}}>
          <Button color="primary" classes={{root: classes.btn }}>
            Yes
          </Button>
          <Button classes={{root: classes.btn }}>
            No
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
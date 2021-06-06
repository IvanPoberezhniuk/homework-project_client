import React from 'react';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles((theme) => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
    borderRadius: '6px',
    padding: '20px 32px',
  },
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  content: {
    fontSize: '18px',
    fontFamily: 'Roboto',
    fontWeight: 500,
  },
  footer: {
    width: '100%',
  }
}));

export const CustomModal = ({width, height, title, content, footer, open, handleClose}) => {
  const classes = useStyles();

  const modalSize = {
    width,
    height,
  };

  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        className={classes.wrapper}
      >
        <div className={clsx(classes.paper, classes.container)} style={modalSize}>
          <div id="simple-modal-title" className={classes.header}>
            {title}
          </div>
          <div className={classes.content}>
            {content}
          </div>
          <div className={classes.footer}>
            {footer}
          </div>
        </div>
      </Modal>
  );
}
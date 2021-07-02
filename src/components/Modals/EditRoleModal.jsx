import { forwardRef, useState } from 'react';

import { Button, Select } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editUser } from 'redux/modules/users';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  MenuItem,
  Slide,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  dialog: {
    padding: '40px 32px',
  },
  dialogContent: {
    padding: 0,
    margin: '40px 0',
  },
  dialogTitle: {
    padding: '0',
  },
  dialogActions: {
    padding: 0,
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    width: '150px',
  },
}));

const ROLE = {
  ADMIN: 'admin',
  QA: 'qa',
  DEV: 'developer',
  MANAGER: 'manager',
  GUEST: 'guest',
};

const EditRoleModal = ({ isOpen = true, handleClose, user }) => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.users.isLoading);
  const [role, setRole] = useState(user.role || ROLE.GUEST);
  const changeRole = (value) => {
    setRole(value);
  };

  const handleSubmit = async () => {
    try {
      await dispatch(editUser({ ...user, role }));
    } finally {
      history.goBack();
    }
  };

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
        classes={{ paper: classes.dialog }}
      >
        <DialogTitle
          id='alert-dialog-slide-title'
          classes={{ root: classes.dialogTitle }}
        >
          Edit Role
        </DialogTitle>
        <DialogContent classes={{ root: classes.dialogContent }}>
          <FormControl variant='outlined' margin='dense' size='small'>
            <Select
              onChange={(event) => changeRole(event.target.value)}
              value={role}
              labelId='simple-select-label'
              id='simple-select-label'
            >
              <MenuItem value={ROLE.ADMIN}>Admin</MenuItem>
              <MenuItem value={ROLE.GUEST}>Guest</MenuItem>
              <MenuItem value={ROLE.MANAGER}>Manager</MenuItem>
              <MenuItem value={ROLE.QA}>QA</MenuItem>
              <MenuItem value={ROLE.DEV}>Developer</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions classes={{ root: classes.dialogActions }}>
          <Button
            onClick={handleSubmit}
            className={classes.button}
            color='primary'
            disabled={isLoading}
          >
            Save
          </Button>
          <Button
            onClick={handleClose}
            className={classes.button}
            color='secondary'
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default EditRoleModal;

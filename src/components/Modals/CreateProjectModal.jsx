import { forwardRef, useEffect } from 'react';

import { ProjectForm, ProjectTitle } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addProject } from 'redux/modules/projects';
import { fetchUsers } from 'redux/modules/users';

import { Dialog, DialogContent, DialogTitle, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  paper: {
    padding: '40px 32px',
    borderRadius: '6px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
    marginTop: '100px',
  },
  title: {
    padding: 0,
    '& .MuiTypography-h6': {
      lineHeight: '42px',
      fontWeight: 500,
      fontSize: '36px',
    },
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
    },
  },
  paperWidthMd: {
    maxWidth: '713px',
  },
}));

const Transition = forwardRef(function Transition({ ref, ...other }) {
  return <Slide ref={ref} {...other} />;
});

const CreateProjectModal = ({
  children,
  isOpen = true,
  handleClose,
  isLoading,
  ...other
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users.list);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const submit = async (project) => {
    await dispatch(addProject(project));
    await handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby='alert-dialog-create-project'
      aria-describedby='alert-dialog-slide-create-new-project'
      classes={{
        paper: classes.paper,
        container: classes.container,
        paperWidthMd: classes.paperWidthMd,
      }}
      maxWidth='md'
    >
      <DialogTitle
        id='alert-dialog-project-title'
        classes={{ root: classes.title }}
      >
        <ProjectTitle>Create new Project</ProjectTitle>
      </DialogTitle>
      <DialogContent classes={{ root: classes.contentWrapper }}>
        <ProjectForm
          availableItems={users}
          selectedItems={[]}
          closeHandler={handleClose}
          submitHandler={submit}
          isLoading={isLoading}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreateProjectModal;

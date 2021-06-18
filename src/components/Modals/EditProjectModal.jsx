import { forwardRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Dialog, DialogContent, DialogTitle, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { ProjectForm, ProjectTitle } from '..';
import { editProject, fetchProject } from '../../redux/modules/projects';
import { fetchUsers } from '../../redux/modules/users';

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
  return <Slide direction='down' ref={ref} {...other} />;
});

const EditProjectModal = ({
  children,
  isOpen = true,
  handleClose = () => {},
  isLoading = false,
  ...other
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users.list);
  const currentProject = useSelector((state) => state.projects.current);

  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProject());
  }, [dispatch]);

  const submit = async (project) => {
    await dispatch(editProject(project));
    await handleClose();
  };

  return (
    <Dialog
      open={isOpen}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby='alert-dialog-slide-title'
      aria-describedby='alert-dialog-slide-description'
      classes={{
        paper: classes.paper,
        container: classes.container,
        paperWidthMd: classes.paperWidthMd,
      }}
      maxWidth='md'
    >
      <DialogTitle
        id='alert-dialog-slide-title'
        classes={{ root: classes.title }}
      >
        <ProjectTitle>Edit Project</ProjectTitle>
      </DialogTitle>
      <DialogContent classes={{ root: classes.contentWrapper }}>
        <ProjectForm
          availableItems={users}
          selectedItems={currentProject?.users}
          closeHandler={handleClose}
          submitHandler={submit}
          isLoading={isLoading}
          project={currentProject}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditProjectModal;

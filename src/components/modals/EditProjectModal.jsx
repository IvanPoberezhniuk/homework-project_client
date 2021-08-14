import { forwardRef, useEffect } from 'react';

import { ProjectForm, ProjectTitle } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProject } from 'redux/modules/projects';
import { fetchUsers } from 'redux/modules/users';

import { Dialog, DialogContent, DialogTitle, Slide } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Skeleton } from '@material-ui/lab';

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
    minWidth: '713px',
  },
  actions: {
    padding: 0,
  },
  actionsSpacing: {
    '& > :not(:first-child)': {
      marginLeft: '33px',
    },
  },

  skeletonContainer: {
    minHeight: '649px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  skeletonButtonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction='down' ref={ref} {...props} />;
});

const EditProjectModal = ({
  children,
  isOpen = true,
  handleClose,
  handleSubmit,
  isLoading = false,
  id,
  ...other
}) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const users = useSelector((state) => state.users.list);
  const currentProject = useSelector((state) => state.projects.current);
  console.log('users');
  console.log(users);
  console.log('current pt');
  console.log(currentProject);
  useEffect(() => {
    dispatch(fetchUsers());
    dispatch(fetchProject({ id }));
  }, [dispatch, id]);

  const submit = (project) => {
    handleSubmit(project);
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
        {currentProject?.id && users.length ? (
          <ProjectForm
            availableItems={users}
            selectedItems={currentProject.team}
            closeHandler={handleClose}
            submitHandler={submit}
            isLoading={isLoading}
            projectName={currentProject.projectName}
          />
        ) : (
          <div className={classes.skeletonContainer}>
            <Skeleton component='div' variant='rect' height={40} />
            <Skeleton component='div' variant='rect' height={240} />
            <Skeleton component='div' variant='rect' height={240} />
            <div className={classes.skeletonButtonsContainer}>
              <Skeleton variant='rect' width={331} height={40} />
              <Skeleton variant='rect' width={331} height={40} />
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default EditProjectModal;

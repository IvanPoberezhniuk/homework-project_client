import { useEffect } from 'react';

import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchProjects } from 'redux/modules/projects';
import { MODAL_PROJECT } from 'router/ModalSwitcher';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProjectsTable from '../modules/projectsTable/ProjectsTable';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '0 0 40px 0',
  },
  buttonRoot: {
    minWidth: '220px',
    textTransform: 'none',
  },
}));

const Projects = () => {
  const history = useHistory();
  const location = useLocation();
  const dispatch = useDispatch();
  const classes = useStyles();
  const projects = useSelector((state) => state.projects.list);
  console.log('projects');
  console.log(projects);
  const isLoading = useSelector((state) => state.projects.isLoading);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <>
      <Grid
        container
        direction='row'
        justify='space-between'
        className={classes.root}
      >
        <Typography variant='h5' component='h1'>
          Projects
        </Typography>
        <Button
          color='primary'
          className={classes.buttonRoot}
          onClick={() => {
            history.push(`/project/${MODAL_PROJECT.CREATE}`, {
              background: location,
            });
          }}
        >
          Create Project
        </Button>
      </Grid>
      <ProjectsTable rows={projects} isLoading={isLoading} />
    </>
  );
};

export default Projects;

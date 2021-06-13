import { useEffect } from 'react';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';

import ProjectsTable from '../modules/projectsTable/ProjectsTable';
import { Button } from '../../components';
import {
  fetchProjects,
  FETCH_PROJECTS,
} from '../../redux/modules/projectsTable';

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
  const classes = useStyles();
  const projects = useSelector((state) => state.projectsTable.list);
  const isLoading = useSelector((state) => state.projectsTable.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects(FETCH_PROJECTS));
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
        <Button color='primary' className={classes.buttonRoot}>
          Create Project
        </Button>
      </Grid>
      <ProjectsTable rows={projects} isLoading={isLoading} />
    </>
  );
};

export default Projects;

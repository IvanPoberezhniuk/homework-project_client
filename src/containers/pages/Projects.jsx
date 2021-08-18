import { useEffect } from 'react';

import { Button } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { fetchProjects } from 'redux/modules/projects';
import { OPERATIONS, ENTITY } from 'router/ModalSwitcher';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import ProjectsTable from '../modules/projectsTable/ProjectsTable';
import { users } from 'redux/modules';

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
  const isLoading = useSelector((state) => state.projects.isLoading);
  const user = useSelector((state) => state.profile.userDTO);

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const getUserProjects = () => {
    return projects.filter((project) => {
      const teamOfCurrentUser = project.team.filter(
        (u) => u.userId === user.id
      );
      if (teamOfCurrentUser.length > 0) return project;
    });
  };

  return (
    <>
      <Grid
        container
        direction='row'
        justifyContent='space-between'
        className={classes.root}
      >
        <Typography variant='h5' component='h1'>
          Projects
        </Typography>
        <Button
          color='primary'
          className={classes.buttonRoot}
          onClick={() => {
            history.push(`/${ENTITY.PROJECTS}/${OPERATIONS.CREATE}`, {
              background: location,
            });
          }}
        >
          Create Project
        </Button>
      </Grid>
      {(user.role === 'admin' || user.role === 'manager') && (
        <ProjectsTable
          rows={projects}
          isLoading={isLoading}
          isShowOperationsIcons={true}
        />
      )}
      {(user.role === 'developer' || user.role === 'qa') && (
        <ProjectsTable
          rows={getUserProjects()}
          isLoading={isLoading}
          isShowOperationsIcons={false}
        />
      )}
    </>
  );
};

export default Projects;

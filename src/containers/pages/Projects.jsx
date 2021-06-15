import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button, CreateProjectModal } from '../../components';
import {
  deleteProject,
  editProject,
  fetchProjects,
} from '../../redux/modules/projects';
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
  const classes = useStyles();
  const projects = useSelector((state) => state.projects.list);
  const isLoading = useSelector((state) => state.projects.isLoading);
  const [showAddProjectModal, setShowAddProjectModal] = useState(false);
  const [showEditProjectModal, setShowEditProjectModal] = useState(false);
  const [showRemoveProjectModal, setShowRemoveProjectModal] = useState(false);
  const [showTeamModal, setShowTeamModal] = useState(false);
  const [showStarProjectModal, setStarProjectModal] = useState(false);
  const [showFinishProjectModal, setFinishProjectModal] = useState(false);

  const dispatch = useDispatch();

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
          onClick={() => setShowAddProjectModal(true)}
        >
          Create Project
        </Button>
        {/* <Button
          color='primary'
          className={classes.buttonRoot}
          onClick={() =>
            dispatch(
              editProject({
                id: 1,
                projectName: '2222222_aaaa',
                startDat: '1333',
                endDate: '2333',
                team: 'TEST',
              })
            )
          }
        >
          edit
        </Button>
        <Button
          color='primary'
          className={classes.buttonRoot}
          onClick={() => dispatch(deleteProject(1))}
        >
          delete
        </Button> */}
      </Grid>
      <ProjectsTable rows={projects} isLoading={isLoading} />
      {showAddProjectModal && (
        <CreateProjectModal
          isOpen={showAddProjectModal}
          handleClose={() => setShowAddProjectModal(false)}
          isLoading={isLoading}
        />
      )}
    </>
  );
};

export default Projects;

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button } from '../../components/button/Button';
import ProjectsTable from '../../components/projectsTable/ProjectsTable';

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
      <ProjectsTable></ProjectsTable>
    </>
  );
};

export default Projects;

import React from 'react';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    border: '1px solid rgba(0, 0, 0, .125)',
    boxShadow: 'none',
  },
  accordionSummary: {
    '&:hover': {
      background: theme.palette.secondary.light,
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const ProjectHistory = () => {
  const classes = useStyles();

  return (
    <>
      <Typography>History</Typography>
      <Accordion square='true' classes={{ root: classes.root }}>
        <AccordionSummary
          classes={{ root: classes.accordionSummary }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.heading}>Created</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Start date: 11.11.11</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square='true' classes={{ root: classes.root }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel2a-content'
          id='panel2a-header'
        >
          <Typography className={classes.heading}>Edited</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <p>Edited date: 11.11.11</p>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion square='true' classes={{ root: classes.root }} disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel3a-content'
          id='panel3a-header'
        >
          <Typography className={classes.heading}>
            <p>Still in progress</p>
          </Typography>
        </AccordionSummary>
      </Accordion>
    </>
  );
};

export default ProjectHistory;

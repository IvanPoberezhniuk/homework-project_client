import React from 'react';

import MUIAlert from '@material-ui/lab/Alert';
import { withStyles } from '@material-ui/core/styles';

const styledBy = (property, mapping) => (props) => mapping[props[property]];

const styles = {
  root: {
    color: styledBy('severity', {
      error: '#FF0000',
    }),
    borderRadius: '0',
    borderLeft: '4px solid ',
    fontWeight: 'bold',
  },
};

const Alert = (props) => {
  const { children, ...other } = props;
  return <MUIAlert {...other}>{children}</MUIAlert>;
};

export default withStyles(styles)(Alert);

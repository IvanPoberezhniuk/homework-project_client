import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import MUIButton from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    color: '#FFFFFF',
    height: '37px',
    padding: '0 30px',
    boxShadow: 'none',
    textTransform: 'none',
  },
  hover: {
    background: '#02CC67',
  },
};

export const Button = withStyles(styles)((props) => {
  const { classes, color, children, className, ...other } = props;
  return (
    <MUIButton
      color={color}
      className={clsx(classes.root)}
      variant='contained'
      {...other}
    >
      Default
    </MUIButton>
  );
});

Button.propTypes = {
  color: PropTypes.string,
};
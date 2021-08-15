import React from 'react';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Clear } from '@material-ui/icons';
import { Autocomplete } from '@material-ui/lab';

const useStyles = makeStyles(() => ({
  chip: {
    margin: '4px',
    background: '#02CC67',
    borderRadius: '3px',
    height: '24px',
  },
  chipLabel: {
    padding: '5px 8px 5px 9px',
    fontSize: '12px',
    fontFamily: 'Roboto',
    fontWeight: 500,
    color: '#FFF',
  },
  inputRoot: {
    '&[class*="MuiOutlinedInput-root"]': {
      padding: '4px 12px',
    },
  },
  chipIconClear: {
    color: '#fff',
    height: '14px',
    width: '14px',
    '&:hover': {
      color: '#fff',
    },
  },
}));

const MultiSelectInput = ({ placeholder, onSelectHandler, ...other }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      multiple
      filterSelectedOptions
      ChipProps={{
        deleteIcon: <Clear className={{ root: classes.chipIconClear }} />,
        classes: {
          root: classes.chip,
          deleteIcon: classes.chipIconClear,
          label: classes.chipLabel,
        },
      }}
      classes={{ inputRoot: classes.inputRoot, input: classes.input }}
      onChange={(event, value) => {
        onSelectHandler(value);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          placeholder={!other.defaultValue.length && placeholder}
        />
      )}
      {...other}
    />
  );
};

export default MultiSelectInput;

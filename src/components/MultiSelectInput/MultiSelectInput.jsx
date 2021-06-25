import React, { useState } from 'react';

import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Clear as ClearIcon } from '@material-ui/icons/Clear';
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
    padding: '8px 4px',
    height: '14px',
    width: '14px',
    '&:hover': {
      color: '#fff',
    },
  },
}));

const MultiSelectInput = ({ placeholder, ...other }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState([]);

  return (
    <Autocomplete
      onChange={(event, value) => {
        setSelected((prevState) => [...prevState, value]);
      }}
      multiple
      getOptionLabel={(option) => option.name}
      filterSelectedOptions
      classes={{ inputRoot: classes.inputRoot, input: classes.input }}
      ChipProps={{
        deleteIcon: <ClearIcon />,
        classes: {
          root: classes.chip,
          deleteIcon: classes.chipIconClear,
          label: classes.chipLabel,
        },
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          variant='outlined'
          placeholder={!selected.length && placeholder}
        />
      )}
      {...other}
    />
  );
};

export default MultiSelectInput;

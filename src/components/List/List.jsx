import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

import { Avatar } from '..';

const useStyles = makeStyles((theme) => ({
  item: {
    border: '1px solid red',
  },
  container: {
    height: '100%',
    background: '#F4F4F4',
    border: '1px solid #CCCCCC',
    overflowY: 'auto',
    overflowX: 'hidden',
    '&::-webkit-scrollbar': {
      width: '4px',
      background: 'rgba(0, 0, 0, 0.5);',
      borderRadius: '3px',
    },
  },
  gridContainer: {
    padding: '24px 32px',
  },
  placeholder: {
    color: '#777777',
    fontWeight: 400,
    textAlign: 'left',
    padding: '16px',
    margin: 0,
  },
  avatarWrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  avatarName: {
    paddingLeft: '16px',
    fontWeight: 600,
    fontSize: '18px',
    color: '#000',
    margin: 0,
  }
}));

const List = ({ items, placeholder, onClickItemHandler, ...props }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {!items.length ? (
        <p className={classes.placeholder}>{placeholder}</p>
      ) : (
        <Grid
          container
          spacing={3}
          classes={{ container: classes.gridContainer }}
        >
          {items.map((item) => (
            <Grid
              Grid
              item
              xs={3}
              key={item.id}
              onClick={() => {
                onClickItemHandler(item.id);
              }}
              className={classes.avatarWrapper}
            >
              <Avatar>{(item.firstName[0] + item.lastName[0]).toUpperCase()}</Avatar>
              <p className={classes.avatarName}>{item.firstName} {item.lastName}</p>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default List;

import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';

import style from './ProjectForm.module.css'
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';


const useStyles = makeStyles((theme) => ({
  form: {
    width: '713px',
  },
  checkbox: {
    display: 'block',
    width: '100%',
    textAlign: 'right',
    margin: '16px 0 0 0',
    lineHeight: '16px',
  },
  checkboxLabel: {
    fontSize: '16px',
    color: '#777777',
  },
  btn: {
    width: '322px',
    height: '37px',
    marginTop: '40px',
  },
  employee: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    background: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    width: '48px',
    height: '48px',
    fontWeigh: 500,
    lineHeight: '21px',
  },
  item: {
    background: 'red',
    paddingLeft: '16px',
    witdh: '70px',
  },
  container: {
    width: '649px',
    background: '#F4F4F4',
    border: '1px solid #CCCCCC',
    height: '100%',

    overflowY: 'auto',
    padding: '24px 32px',
  },
  listWrapper: {
    marginTop: '16px',
    height: '240px',
  },
  placeholder: {
    color: '#777777',
    fontWeight: 400,
    textAlign: 'left',
    padding: '16px',
    margin: 0,
  }
}));



const Employee = ({ name, ...props }) => {
  const classes = useStyles();
  return (
    <div className={classes.employee}>
      <Avatar className={classes.avatar}>{name}</Avatar>
      {name && <div className={classes.name}>{name}</div>}
    </div>
  )
}
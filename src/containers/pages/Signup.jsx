import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

import SignupForm  from './../../components/Forms/SignupForm/SignupForm';
import Alert from './../../components/alert/Alert';

const useStyles = makeStyles(() => ({
  wrapper: {
    width: '100vw',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paper: {
    borderRadius: '6px',
    padding: '40px 32px',
    boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.25)',
  },
  form: {
    marginTop: '24px',
  },
  title: {
    fontSize: '36px',
    lineHeight: '42px',
    fontWeight: '400',
  },
  btn: {
    width: '322px',
    height: '37px',
  },
  footer: {
    marginTop: '8px',
    fontSize: '12px',
    alignSelf: 'flex-start'
  },
  alertWrapper: {
    width: '100%',
    margin: '16px 0 8px 0',
  },
}));

const Signup = ({ isSuccessSignUp, ...props }) => {
  //isSuccessSignUp = true;
  const classes = useStyles();

  const body = (<div className={classes.container}>
    <Typography variant='h1' component='h2' className={classes.title}>
      Sign Up
    </Typography>
    <div className={classes.form}>
      {!isSuccessSignUp && <Alert severity='error' className={classes.alertWrapper}>Some Error</Alert>}
      <SignupForm  />
    </div>
    <div className={classes.footer}>
      Already have an account? <Link href='/signin' color='primary' underline='always'>Sign In</Link>
    </div>
  </div >
  )

  return <div className={classes.wrapper}>
    <Paper children={body} classes={{root: classes.paper}}/>
  </div>;
};

export default Signup;

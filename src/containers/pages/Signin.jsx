import { useEffect, useState } from 'react';

import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router';

import { Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Alert, SigninForm } from '../../components';
import { signin } from '../../redux/modules/auth';

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
  content: {
    marginTop: '24px',
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
    alignSelf: 'flex-start',
  },
  alert: {
    margin: '16px 0 8px 0',
  },
}));

const Signin = ({ isSuccessSignIn, ...props }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const serverErrorMsg = useSelector((state) => state.auth.serverErrorMsg);
  const isAuth = useSelector((state) => state.auth.isAuth);
  const token = useSelector((state) => state.auth.token);
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    if (rememberMe) {
      Cookies.set('token', token, { expires: 30 });
    } else {
      Cookies.set('token', token);
    }
  }, [token, rememberMe, dispatch]);

  const body = (
    <div className={classes.container}>
      <Typography variant='h1' component='h2' className={classes.title}>
        Sign In
      </Typography>
      <div className={classes.content}>
        {serverErrorMsg && (
          <div className={classes.alert}>
            <Alert severity='error'>{serverErrorMsg}</Alert>
          </div>
        )}
        <SigninForm
          handleSubmitting={async (email, password, rememberMe) => {
            setRememberMe(rememberMe);
            await dispatch(signin({ email, password }));
          }}
        />
      </div>
      <div className={classes.footer}>
        <Link href='/signup' color='primary' underline='always'>
          Sign Up
        </Link>
      </div>
    </div>
  );

  return isAuth ? (
    <Redirect to='/' />
  ) : (
    <div className={classes.wrapper}>
      <Paper children={body} classes={{ root: classes.paper }} />
    </div>
  );
};

export default Signin;

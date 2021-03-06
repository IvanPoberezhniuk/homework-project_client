import { Alert, SignupForm } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { signup } from 'redux/modules/auth';

import { Link, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  content: {
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
  alertWrapper: {
    margin: '16px 0 8px 0',
  },
  alert: {
    fontSize: '14px',
  },
}));

const Signup = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const serverErrorMsg = useSelector((state) => state.auth.serverErrorMsg);
  const isSuccessRegister = useSelector(
    (state) => state.auth.isSuccessRegister
  );
  const isLoading = useSelector((state) => state.auth.isLoading);

  const body = (
    <div className={classes.container}>
      <Typography variant="h1" component="h2" className={classes.title}>
        Sign Up
      </Typography>
      <div className={classes.content}>
        {serverErrorMsg && (
          <div className={classes.alertWrapper}>
            <Alert severity="error" classes={{ root: classes.alert }}>
              {serverErrorMsg}
            </Alert>
          </div>
        )}
        <SignupForm
          handleSubmitting={(
            firstName,
            lastName,
            email,
            password,
            confirmPassword
          ) => {
            dispatch(
              signup({ firstName, lastName, email, password, confirmPassword })
            );
          }}
          isLoading={isLoading}
        />
      </div>
      <div className={classes.footer}>
        Already have an account?{' '}
        <Link href="/signin" color="primary" underline="always">
          Sign In
        </Link>
      </div>
    </div>
  );

  return isSuccessRegister ? (
    <Redirect
      to={{
        pathname: '/signin',
      }}
    />
  ) : (
    <div className={classes.wrapper}>
      <Paper children={body} classes={{ root: classes.paper }} />
    </div>
  );
};

export default Signup;

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { Button, Checkbox, Input } from '../../';

const useStyles = makeStyles(() => ({
  form: {
    maxWidth: '322px',
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
  inputWrapper: {
    marginTop: '16px',
  },
}));

const SigninForm = () => {
  const classes = useStyles();

  const SigninSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Please enter your email address'),
    password: Yup.string()
      .min(6, 'Incorrect password')
      .max(20, 'Incorrect password')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Invalid password')
      .required('Please enter your password'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '', rememberMe: false }}
      validationSchema={SigninSchema}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      <Form className={classes.form}>
        <Input
          name='email'
          type='email'
          placeholder='Email'
          className={classes.inputWrapper}
        />
        <Input
          name='password'
          type='password'
          placeholder='Password'
          className={classes.inputWrapper}
        />
        <FormControlLabel
          control={<Checkbox name='rememberMe' />}
          label='Remember me?'
          classes={{ root: classes.checkbox, label: classes.checkboxLabel }}
        />
        <Button type='submit' color='primary' classes={{ root: classes.btn }}>
          {' '}
          Sign in
        </Button>
      </Form>
    </Formik>
  );
};

export default SigninForm;

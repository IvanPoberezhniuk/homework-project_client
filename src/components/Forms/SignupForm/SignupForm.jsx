import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

import Input from '../../Input/Input';
import { Button } from '../../Button/Button';

const useStyles = makeStyles(() => ({
  form: {
    maxWidth: '322px',
  },
  btn: {
    width: '322px',
    height: '37px',
    marginTop: '40px',
  },
  inputWrapper: {
    marginTop: '16px'
  },
}));

const SignupForm = () => {
  const classes = useStyles();

  const SigninSchema = Yup.object({
    firstName: Yup.string().max(255, 'Too long').required('Please enter your first name'),
    lastName: Yup.string().max(255, 'Too long').required('Please enter your last name'),
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    password: Yup.string()
      .min(6, 'Too short')
      .max(20, 'Too long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
        'Password must contains at least one letter in lower case, one letter in upper case and one number')
      .required('Please enter your password'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Please confirm your password')
      .required('Please confirm your password'),
  });

  return (
     <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      }}
       validationSchema={SigninSchema}
       onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
       }}
     >
      <Form className={classes.form}>
        <Input name='firstName' type='text' placeholder='First Name' className={classes.inputWrapper} />
        <Input name='lastName' type='text' placeholder='Last Name' className={classes.inputWrapper} />
        <Input name='email' type='email' placeholder='Email' className={classes.inputWrapper} />
        <Input name='password' type='password' placeholder='Password' className={classes.inputWrapper} />
        <Input name='confirmPassword' type='password' placeholder='Confirm Password' className={classes.inputWrapper} />
        <Button type='submit' color='primary' classes={{root: classes.btn }}>Sign Up</Button>
       </Form>
     </Formik>
  );
};

export default SignupForm;

import clsx from 'clsx';
import { Button, ButtonLoader, Checkbox, Input } from 'components';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FormControlLabel } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  form: {
    maxWidth: '322px',
  },
  checkbox: {
    display: 'block',
    width: '100%',
    textAlign: 'right',
    margin: '16px 0 40px 0',
    lineHeight: '16px',
  },
  checkboxLabel: {
    fontSize: '16px',
    color: '#777777',
  },

  inputWrapper: {
    marginTop: '16px',
  },
}));

const SigninForm = ({ handleSubmitting, isLoading }) => {
  const classes = useStyles();

  const { errors, touched, handleSubmit, getFieldProps } = useFormik({
    initialValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
      password: Yup.string()
        .min(6, 'Incorrect password')
        .max(20, 'Incorrect password')
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Invalid password')
        .required('Please enter your password'),
    }),
    onSubmit(values) {
      handleSubmitting(values.email, values.password, values.rememberMe);
    },
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        type='email'
        placeholder='Email'
        className={clsx(classes.inputWrapper)}
        error={errors.email && touched.email}
        helperText={touched.email && errors.email}
        {...getFieldProps('email')}
      />
      <Input
        type='password'
        placeholder='Password'
        className={clsx(
          classes.inputWrapper,
          touched.password && errors.password && classes.inputWrapperWithError
        )}
        error={errors.password && touched.password}
        helperText={touched.password && errors.password}
        {...getFieldProps('password')}
      />
      <FormControlLabel
        control={<Checkbox {...getFieldProps('rememberMe')} />}
        label='Remember me?'
        classes={{ root: classes.checkbox, label: classes.checkboxLabel }}
      />
      <Button type='submit' color='primary' disabled={isLoading} fullWidth>
        Sign In
        {isLoading && <ButtonLoader />}
      </Button>
    </form>
  );
};

export default SigninForm;

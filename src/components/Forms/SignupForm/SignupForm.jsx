import { useFormik } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Button, Input } from '../../';

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
    marginTop: '16px',
  },
  inputWrapperWithError: {
    marginBottom: '30px',
  }
}));

const SignupForm = ({handleSubmitting}) => {
  const classes = useStyles();

  const {errors, touched, handleSubmit, getFieldProps}  = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(255, 'Too long')
        .required('Please enter your first name'),
      lastName: Yup.string()
        .max(255, 'Too long')
        .required('Please enter your last name'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Please enter your email address'),
      password: Yup.string()
        .min(6, 'Too short')
        .max(20, 'Too long')
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
          'Password must contains at least one letter in lower case, one letter in upper case and one number'
        )
        .required('Please enter your password'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Please confirm your password')
        .required('Please confirm your password'),
    }),
    onSubmit(values) {
      handleSubmitting(values.firstName, values.lastName, values.email, values.password)
    },
  });

  return (
    <form
      className={classes.form}
      onSubmit={handleSubmit}
    >
      <Input
        type='text'
        placeholder='First Name'
        className={clsx(classes.inputWrapper,
          (touched.firstName && errors.firstName && classes.inputWrapperWithError))}
        error={errors.firstName && touched.firstName}
        helperText={touched.firstName && errors.firstName}
        {...getFieldProps('firstName')}
      />
      <Input
        type='text'
        placeholder='Last Name'
        className={clsx(classes.inputWrapper,
          (touched.lastName && errors.lastName && classes.inputWrapperWithError))}
        error={errors.lastName && touched.lastName}
        helperText={touched.lastName && errors.lastName}
        {...getFieldProps('lastName')}
      />
      <Input
        type='email'
        placeholder='Email'
        className={clsx(classes.inputWrapper,
          (touched.email && errors.email && classes.inputWrapperWithError))}
        error={errors.email && touched.email}
        helperText={touched.email && errors.email}
        {...getFieldProps('email')}
      />
      <Input
        type='password'
        placeholder='Password'
        className={clsx(classes.inputWrapper,
          (touched.password && errors.password && classes.inputWrapperWithError))}
        error={errors.password && touched.password}
        helperText={touched.password && errors.password}
        {...getFieldProps('password')}
      />
      <Input
        type='password'
        placeholder='Confirm Password'
        className={clsx(classes.inputWrapper,
          (touched.password && errors.password && classes.inputWrapperWithError))}
        error={errors.confirmPassword && touched.confirmPassword}
        helperText={touched.confirmPassword && errors.confirmPassword}
        {...getFieldProps('confirmPassword')}
      />
      <Button type='submit' color='primary' classes={{ root: classes.btn }}>
        Sign Up
      </Button>
    </form>
  )
};

export default SignupForm;

import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { makeStyles } from '@material-ui/core/styles';

import style from './SigninForm.module.css'
import Input  from '../../Input/Input';
import Checkbox from '../../checkbox/Checkbox';
import { Button } from '../../Button/Button';

const useStyles = makeStyles((theme) => ({
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
}));

const SigninForm = () => {
  const classes = useStyles();

  const SigninSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Please enter your email address'),
    password: Yup.string()
      .min(6, 'Too short')
      .max(20, 'Too long')
      .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/, 'Invalid password')
      .required('Please enter your password'),
  })

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
      <Form>
        <Input name='email' type='email' placeholder='Email' className={style.inputWrapper} />
        <Input name='password' type='password' placeholder='Password' className={style.inputWrapper} />
        <FormControlLabel
          control={<Checkbox name='rememberMe' /> }
          label='Remember me?'
          classes={{ root: classes.checkbox, label: classes.checkboxLabel }
          }
        />
        <Button type='submit' color='primary' classes={{root: classes.btn }}> Sign in</Button>
       </Form>
     </Formik>
   );
 };

export default SigninForm;
import React from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

import style from './ProjectForm.module.css'
import { Input } from '../Input/Input';
import { Button }  from '../Button/Button';

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

const ProjectForm = () => {
  const classes = useStyles();

  const SigninSchema = Yup.object({
    projectName: Yup.string()
      .max(255, 'Too long'),
  })

  return <div>
    Form
  </div>

  /* return (
     <Formik
       initialValues={{ projectName: '', employees: [], seletedEmployees: []}}
       validationSchema={SigninSchema}
       onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
       }}
     >
      <Form>
        <Input name='projectName' type='text' placeholder='Project Name' className={style.inputWrapper} />
        <Button type='submit' color='primary' classes={{root: classes.btn }}> Sign in</Button>
       </Form>
     </Formik>
   ); */
 };

export default ProjectForm;
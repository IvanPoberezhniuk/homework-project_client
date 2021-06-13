import React, {useState} from 'react';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';

import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import List from '../List/List';

const useStyles = makeStyles((theme) => ({
  form: {
    overflowX: 'hidden',
  },
  container: {
    background: '#F4F4F4',
    border: '1px solid #CCCCCC',
    height: '100%',
    padding: '24px 32px',
  },
  listWrapper: {
    height: '240px',
    marginTop: '16px',
  },
  hideBtn: {
    marginTop: '8px',
    textDecoration: 'underline',
    color: '#000',
    fontWeight: 600,
    fontSize: '12px',
    textAlign: 'right',
  },
  btn: {
    width: '331px',
  },
  btnsWrapper: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
  }
}));

const ProjectForm = ({projectName, availableItems, selectedItems, closeHandler, ...props}) => {
  const classes = useStyles();

  const SigninSchema = Yup.object({
    projectName: Yup.string()
      .max(255, 'Too long'),
  });

  const [items, setItems] = useState(availableItems);
  const [selected, setSelectedItems] = useState(selectedItems);


  const selectEmployee = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newArr = [...items];
    newArr.splice(index, 1);

    setSelectedItems([...selected, items[index]]);
    setItems(newArr);
  }

  const deselectEmployee = (id) => {
    const index = selected.findIndex((item) => item.id === id);
    const newArr = [...selected];
    newArr.splice(index, 1);
    
    setItems([...items, selected[index]]);
    setSelectedItems(newArr);
  }

  return (
     <Formik
       initialValues={{ projectName: projectName}}
       validationSchema={SigninSchema}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
          console.log(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
       }}
     >
      <Form className={classes.form}>
        <Input name='projectName' type='text' placeholder='Project Name'  />
        <div className={classes.listWrapper}>
          <List placeholder='Start to add user by clicking on their preview below'
            name='seletedEmployees'
            items={selected}
            onClickItemHandler={deselectEmployee}/>
        </div>
        <div className={classes.listWrapper}>
          <List name='employees' items={items} onClickItemHandler={selectEmployee}/>
        </div>
        <div className={classes.hideBtn}>Hide busy coworkers</div>
        <div className={classes.btnsWrapper}>
          <Button type='submit' color='primary' classes={{ root: classes.btn }}>Save</Button>
          <Button color='' classes={{root: classes.btn }} onClick={closeHandler}>Close</Button>
        </div>
      </Form>
     </Formik>
   );
};

export default ProjectForm;
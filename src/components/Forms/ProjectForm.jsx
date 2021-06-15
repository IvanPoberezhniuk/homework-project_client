import { useState, useEffect } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core/';

import { Button, Input, List } from '..';

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
    minWidth: '300px',
  },
  btnsWrapper: {
    marginTop: '40px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  buttonProgress: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const ProjectForm = ({
  projectName = 'New Project',
  availableItems,
  selectedItems,
  submitHandler,
  closeHandler,
  isLoading,
  ...other
}) => {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [selected, setSelectedItems] = useState(selectedItems);

  const selectEmployee = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newArr = [...items];
    newArr.splice(index, 1);

    setSelectedItems([...selected, items[index]]);
    setItems(newArr);
  };

  const deselectEmployee = (id) => {
    const index = selected.findIndex((item) => item.id === id);
    const newArr = [...selected];
    newArr.splice(index, 1);

    setItems([...items, selected[index]]);
    setSelectedItems(newArr);
  };

  useEffect(() => {
    setItems(availableItems);
  }, [availableItems]);

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      projectName: projectName,
    },
    validationSchema: Yup.object().shape({
      projectName: Yup.string()
        .required('Enter project name')
        .max(255, 'Max length 15 characters')
        .trim(),
    }),
    onSubmit(values) {
      submitHandler({ ...values, team: [...selected] });
    },
  });

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input placeholder='Project Name' {...getFieldProps('projectName')} />
      <div className={classes.listWrapper}>
        <List
          placeholder='Start to add user by clicking on their preview below'
          name='seletedEmployees'
          items={selected}
          onClickItemHandler={deselectEmployee}
        />
      </div>
      <div className={classes.listWrapper}>
        <List
          name='employees'
          items={items}
          onClickItemHandler={selectEmployee}
        />
      </div>
      <div className={classes.hideBtn}>Hide busy coworkers</div>
      <div className={classes.btnsWrapper}>
        <Button
          type='submit'
          color='primary'
          classes={{ root: classes.btn }}
          disabled={isLoading}
        >
          Save
          {isLoading && (
            <CircularProgress size={24} className={classes.buttonProgress} />
          )}
        </Button>
        <Button
          color='secondary'
          classes={{ root: classes.btn }}
          onClick={closeHandler}
        >
          Close
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;

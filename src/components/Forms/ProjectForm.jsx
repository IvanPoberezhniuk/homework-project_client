import { useEffect, useRef, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';

import { Button, ButtonLoader, Input, List } from '..';

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
    padding: '8px 0 0 0 ',
    textDecoration: 'underline',
    fontWeight: 500,
    fontSize: '12px',
    float: 'right',
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main,
    },
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
  availableItems = [],
  selectedItems = [],
  submitHandler,
  closeHandler,
  isLoading,
  project = {},
  ...other
}) => {
  const classes = useStyles();

  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState([]);

  const selectEmployee = (id) => {
    const index = items.findIndex((item) => item.id === id);
    const newArr = [...items];
    newArr.splice(index, 1);

    setSelected([...selected, items[index]]);
    setItems(newArr);
  };

  const deselectEmployee = (id) => {
    const index = selected.findIndex((item) => item.id === id);
    const newArr = [...selected];
    newArr.splice(index, 1);

    setItems([...items, selected[index]]);
    setSelected(newArr);
  };

  useEffect(() => {
    if (availableItems !== items) setItems(availableItems);
  });

  useEffect(() => {
    if (selectedItems !== selected) setSelected(selectedItems);
  });

  useEffect(() => textInput.current.focus(), []);

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      projectName: project?.projectName || '',
    },
    validationSchema: Yup.object().shape({
      projectName: Yup.string()
        .required('Enter project name')
        .max(255, 'Max length 15 characters')
        .trim(),
    }),
    onSubmit(values) {
      submitHandler({ ...values, users: [...selected] });
    },
  });

  const textInput = useRef(null);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        placeholder='Project Name'
        {...getFieldProps('projectName')}
        inputRef={textInput}
        autoComplete='off'
      />
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
      <span className={classes.hideBtn}>Hide busy coworkers</span>
      <div className={classes.btnsWrapper}>
        <Button
          type='submit'
          color='primary'
          classes={{ root: classes.btn }}
          disabled={isLoading}
        >
          Save
          {isLoading && <ButtonLoader />}
        </Button>
        <Button
          color='secondary'
          onClick={closeHandler}
          classes={{ root: classes.btn }}
        >
          Close
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;

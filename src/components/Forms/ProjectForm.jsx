import { useEffect, useRef, useState } from 'react';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { makeStyles } from '@material-ui/core/styles';

import { Button, ButtonLoader, Input, List } from '..';
import { findDiffernt } from '../../helpers/base';

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
  availableItems,
  selectedItems,
  submitHandler,
  closeHandler,
  isLoading,
  projectName = '',
}) => {
  const classes = useStyles();

  const [itemsToShow, setItemsToShow] = useState(
    findDiffernt(availableItems, selectedItems)
  );

  const [selected, setSelected] = useState(selectedItems);
  const [busy, setBusy] = useState(false);

  const selectEmployee = (id) => {
    const index = itemsToShow.findIndex((item) => item.id === id);
    const newArr = [...itemsToShow];
    newArr.splice(index, 1);

    setSelected([...selected, itemsToShow[index]]);
    setItemsToShow(newArr);
  };

  const deselectEmployee = (id) => {
    const index = selected.findIndex((item) => item.id === id);
    const newArr = [...selected];
    newArr.splice(index, 1);

    setItemsToShow([...itemsToShow, selected[index]]);
    setSelected(newArr);
  };

  const selectBusy = (status) => {
    if (status) {
      setItemsToShow((prevState) => prevState.filter((item) => !item.busy));
      setBusy(status);
      return;
    }
    setItemsToShow(findDiffernt(availableItems, selected));
    setBusy(status);
  };

  useEffect(() => textInput.current.focus(), []);

  const { getFieldProps, handleSubmit, errors, touched } = useFormik({
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
      submitHandler({ ...values, users: [...selected] });
    },
  });

  const textInput = useRef(null);

  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <Input
        placeholder='Project Name'
        inputRef={textInput}
        autoComplete='off'
        error={errors.projectName && touched.projectName}
        helperText={touched.projectName && errors.projectName}
        {...getFieldProps('projectName')}
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
          items={itemsToShow}
          onClickItemHandler={selectEmployee}
        />
      </div>
      <span onClick={() => selectBusy(!busy)} className={classes.hideBtn}>
        {busy ? 'Show all coworkers' : 'Hide busy coworkers'}
      </span>
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

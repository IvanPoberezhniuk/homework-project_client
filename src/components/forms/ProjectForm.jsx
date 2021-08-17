import { useEffect, useRef, useState, } from 'react';

import { Button, ButtonLoader, Input, List } from 'components';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { findDiffernt } from 'helpers/base';
import * as Yup from 'yup';
import { getAllUsersProjects } from 'redux/modules/users';

import { makeStyles } from '@material-ui/core/styles';

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
    color: '#fff',
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

  const dispatch = useDispatch();

  const [itemsToShow, setItemsToShow] = useState(
    findDiffernt(availableItems, selectedItems, 'userId')
  );


  const [selected, setSelected] = useState(selectedItems);
  const [busy, setBusy] = useState(false);

  const selectEmployee = (id) => {
    const index = itemsToShow.findIndex((item) => item.userId === id);
    const newArr = [...itemsToShow];
    newArr.splice(index, 1);

    setSelected([...selected, itemsToShow[index]]);
    setItemsToShow(newArr);
  };

  const deselectEmployee = (id) => {
    const index = selected.findIndex((item) => {
      return item.userId === id && item
    });

    const newArr = [...selected];
    newArr.splice(index, 1);

    setItemsToShow([...itemsToShow, selected[index]]);
    setSelected(newArr);
  };

  const selectBusy = async (status) => {
    if (status) {
      await dispatch(getAllUsersProjects(itemsToShow));
      setBusy(status);
      return;
    }
    setBusy(status);
    setItemsToShow(findDiffernt(availableItems, selectedItems, 'userId'));
  };


  useEffect(() => textInput.current.focus(), []);

  useEffect(() => {
    setItemsToShow(findDiffernt(availableItems, selectedItems, 'userId'));
    if (busy) {
      setItemsToShow((prevState) => prevState.filter((item) => !item.busy));
    }

  }, [availableItems, busy]);


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
      submitHandler({
        ...values,
        users: [...selected],
        oldUsers: [...selectedItems],
      });
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
          placeholder="Start to add user by clicking on their preview below"
          name="seletedEmployees"
          items={selected}
          onClickItemHandler={deselectEmployee}
          keyField="userId"
     />
      </div>
      <div className={classes.listWrapper}>
        <List
          name="employees"
          items={itemsToShow}
          onClickItemHandler={selectEmployee}

          keyField='userId'
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
          onClick={closeHandler}
          classes={{ root: classes.btn}}
        >
          Close
        </Button>
      </div>
    </form>
  );
};

export default ProjectForm;

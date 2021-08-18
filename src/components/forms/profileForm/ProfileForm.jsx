import { useEffect, useState } from 'react';

import { Button, Input, MultiSelectInput, ButtonLoader } from 'components';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { getAvailableSkills } from 'redux/modules/profile';
import { getUserSkills } from 'redux/modules/users';

import { makeStyles } from '@material-ui/styles';
import { findDiffernt } from 'helpers/base';

const useStyles = makeStyles(() => ({
  container: {
    maxWidth: '30%',
    lineHeight: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  role: {
    fontWeight: 500,
  },
  profileContent: {
    padding: '40px 0 34px',
  },
  profileItem: {
    margin: '8px 0',
  },
  btn: {
    marginTop: '40px',
  },
}));

const ProfileForm = ({ user, handleSubmitting }) => {
  const classes = useStyles();
  const [selectedSkills, setSelectedSkills] = useState([]);
  const allSkills = useSelector((state) => state.profile.availableSkills);
  const userSkills = useSelector((state) => state.users.userSkills);
  const isLoading = useSelector((state) => state.profile.isLoading);

  const dispatch = useDispatch();

  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit(values) {
      handleSubmitting(
        values.firstName || user.firstName,
        values.lastName || user.lastName,
        selectedSkills
      );
    },
  });

  useEffect(() => {
    dispatch(getAvailableSkills());
    dispatch(getUserSkills(user.id));
  }, [dispatch, user]);

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={user.firstName || 'First name'}
        className={classes.profileItem}
        {...getFieldProps('firstName')}
      />

      <Input
        placeholder={user.lastName || 'Last name'}
        className={classes.profileItem}
        {...getFieldProps('lastName')}
      />
      <MultiSelectInput
        className={classes.profileItem}
        placeholder="Select your skills"
        options={findDiffernt(allSkills, userSkills, 'skillId')}
        userSkills={userSkills}
        getOptionLabel={(option) => option.skillName}
        onSelectHandler={(value) => {
          setSelectedSkills(value);
        }}
      />
      <Button
        fullWidth
        color="primary"
        type="submit"
        disabled={isLoading}
        className={classes.btn}
      >
        Save
      </Button>
      {isLoading && <ButtonLoader />}
    </form>
  );
};

export default ProfileForm;

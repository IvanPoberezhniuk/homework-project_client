import { useState } from 'react';

import {
  Button,
  Input,
  MultiSelectInput,
} from 'components';
import { useFormik } from 'formik';

import { makeStyles } from '@material-ui/styles';

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

const ProfileForm = ({ user, allSkills, handleSubmitting }) => {
  const classes = useStyles();
  const [selectedSkills, setSelectedSkills] = useState(user.skills);

  const { getFieldProps, handleSubmit} = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
    },
    onSubmit(values) {
      handleSubmitting(values.firstName || user.firstName, values.lastName || user.lastName, selectedSkills);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder={ user.firstName || 'First name'}
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
        placeholder='Select your skills'
        options={allSkills}
        defaultValue={selectedSkills}
        getOptionLabel={(option) => option.name}
        onSelectHandler={(value) => {
          setSelectedSkills([...value]);
        }}
      />
      <Button fullWidth color='primary' type='submit' className={classes.btn}>
        Save
      </Button>
    </form>
  );
};

export default ProfileForm;

import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { Button, Input, MultiSelectInput } from '../../components';

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
}));

const Profile = () => {
  const classes = useStyles();
  const { getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      secondName: '',
      skills: [],
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required('Enter your name')
        .min(1, 's')
        .max(15, 'Max length 15 characters')
        .trim(),
      secondName: Yup.string()
        .required('Enter comment text')
        .max(15, 'Max length 15 characters')
        .trim(),
    }),
    onSubmit(values) {},
  });

  return (
    <article className={classes.container}>
      <header>
        <Typography variant='h5' component='h1'>
          Profile
        </Typography>
      </header>
      <form onSubmit={handleSubmit}>
        <section className={classes.profileContent}>
          <p className={classes.role}>Your current Role is:</p>
          <Input
            placeholder='Name'
            className={classes.profileItem}
            {...getFieldProps('firstName')}
          />

          <Input
            placeholder='Second Name'
            className={classes.profileItem}
            {...getFieldProps('secondName')}
          />
          <MultiSelectInput
            className={classes.profileItem}
            options={[
              { name: 'js' },
              { name: 'css' },
              { name: 'php' },
              { name: 'c++' },
              { name: 'Жыве Беларусь!' },
              { name: 'БЧБ!' },
              { name: 'Pascal' },
              { name: 'Уверенный пользователь ПК' },
            ]}
            placeholder='Select your skills'
          />
        </section>
        <Button fullWidth color='primary' type='submit'>
          Save
        </Button>
      </form>
    </article>
  );
};

export default Profile;

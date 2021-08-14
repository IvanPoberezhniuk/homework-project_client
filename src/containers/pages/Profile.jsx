import { useEffect } from 'react';

import { Fallback, ProfileForm } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { editProfile, getAvailableSkills } from 'redux/modules/profile';

import { Typography } from '@material-ui/core';
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
  roleName: {
    textDecoration: 'underline',
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
  const dispatch = useDispatch();
  const history = useHistory();
  const profile = useSelector((state) => state.profile.profile);
  const allSkills = useSelector((state) => state.profile.availableSkills);
  const isLoading = useSelector((state) => state.profile.isLoading);

  useEffect(
    () => async () => {
      await dispatch(getAvailableSkills());
    },
    [dispatch]
  );

  const editProfileHandleSubmit = async (firstName, lastName, skills) => {
    await dispatch(
      editProfile({ id: profile.id, firstName, lastName, skills })
    );
    history.push('/profile');
  };

  const role = () => {
    if (profile.role === 'manager') return 'Manager';
    if (profile.role === 'developer') return 'Developer';
    if (profile.role === 'qa') return 'Qa';
    if (profile.role === 'guest') return 'Guest';
  };
  return isLoading ? (
    <Fallback />
  ) : (
    <article className={classes.container}>
      <header>
        <Typography variant='h5' component='h1'>
          Profile
        </Typography>
      </header>
      <section className={classes.profileContent}>
        <p className={classes.role}>
          Your current Role is:{' '}
          <span className={classes.roleName}>{role()}</span>
        </p>
        <ProfileForm
          allSkills={allSkills}
          user={{
            firstName: profile.firstName,
            lastName: profile.lastName,
            skills: profile.skills,
          }}
          handleSubmitting={(firstName, lastName, skills) =>
            editProfileHandleSubmit(firstName, lastName, skills)
          }
        />
      </section>
    </article>
  );
};

export default Profile;

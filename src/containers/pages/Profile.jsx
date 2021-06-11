import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

import Input from '../../components/Input/Input';
import Button from '../../components/button/Button';
import MultiSelectInput from '../../components/MultiSelectInput/MultiSelectInput';

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

  return (
    <article className={classes.container}>
      <header>
        <Typography variant='h5' component='h1'>
          Profile
        </Typography>
      </header>
      <section className={classes.profileContent}>
        <p className={classes.role}>Your current Role is:</p>
        <Input placeholder='Name' type='text' className={classes.profileItem} />
        <Input
          placeholder='Second Name'
          type='text'
          className={classes.profileItem}
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
      <Button fullWidth color='primary'>
        Save
      </Button>
    </article>
  );
};

export default Profile;

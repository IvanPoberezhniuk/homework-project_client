import { NavLink } from 'react-router-dom';

import { Avatar, List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Projects from '../../../assets/icons/projects.svg';
import User from '../../../assets/icons/user.svg';
import Users from '../../../assets/icons/users.svg';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '105px',
    position: 'fixed',
    height: '100vh',
    margin: '80px 0 0 0',
  },
  aside: {
    minWidth: '100px',
    backgroundColor: theme.palette.secondary.main,
    position: 'relative',
  },
  button: {
    margin: '8px 0',
    flex: 0,
    width: '100px',
    height: '104px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
  },
  listItemText: {
    flex: 0,
  },
  active: {
    backgroundColor: theme.palette.primary.light,
  },
}));

const SideBar = ({ role }) => {
  const classes = useStyles();

  const AdminMenu = (
    <>
      <ListItem
        className={classes.button}
        button
        key={Projects}
        component={NavLink}
        to="/projects"
        exact
        activeClassName={classes.selected}
      >
        <Avatar variant="square" src={Projects} />
        <ListItemText className={classes.listItemText} primary="Projects" />
      </ListItem>
      <ListItem
        classes={{ root: classes.button }}
        button
        key={Users}
        component={NavLink}
        activeClassName={classes.selected}
        to="/users"
        exact
      >
        <Avatar variant="square" src={Users} />
        <ListItemText className={classes.listItemText} primary="Users" />
      </ListItem>
    </>
  );

  const ManagerDeveloperQaMenu = (
    <>
      <ListItem
        className={classes.button}
        button
        key={Projects}
        component={NavLink}
        to="/projects"
        exact
        activeClassName={classes.selected}
      >
        <Avatar variant="square" src={Projects} />
        <ListItemText className={classes.listItemText} primary="Projects" />
      </ListItem>
      <ListItem
        classes={{ root: classes.button }}
        button
        key={User}
        component={NavLink}
        activeClassName={classes.selected}
        to="/profile"
        exact
      >
        <Avatar variant="square" src={User} />
        <ListItemText className={classes.listItemText} primary="Profile" />
      </ListItem>
    </>
  );

  const GuestMenu = (
    <>
      <ListItem
        classes={{ root: classes.button }}
        button
        key={User}
        component={NavLink}
        activeClassName={classes.selected}
        to="/profile"
        exact
      >
        <Avatar variant="square" src={User} />
        <ListItemText className={classes.listItemText} primary="Profile" />
      </ListItem>
    </>
  );

  return (
    <aside className={classes.aside}>
      <List className={classes.root}>
        {role === 'admin' && AdminMenu}
        {role === 'guest' && GuestMenu}
        {(role === 'manager' || role === 'developer' || role === 'qa') &&
          ManagerDeveloperQaMenu}
      </List>
    </aside>
  );
};

export default SideBar;

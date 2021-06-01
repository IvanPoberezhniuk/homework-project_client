import React from 'react';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

import Projects from '../../../assets/icons/projects.svg';
import Users from '../../../assets/icons/users.svg';
import User from '../../../assets/icons/user.svg';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: '100px',
    zIndex: '-1',
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: '100px',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {},
  },
  toolbar: {
    height: '96px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  paperAnchorDockedLeft: {
    zIndex: -1,
    width: '100px',
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
    '&$selected': {
      backgroundColor: theme.palette.primary.light,
    },
  },
  selected: {
    backgroundColor: theme.palette.primary.light,
  },
  listItemText: {
    flex: 0,
  },
}));

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}></div>
        <List>
          <ListItem
            // className={clsx(classes.button, classes.selected)}
            classes={{ root: classes.button, selected: classes.selected }}
            button
            key={Users}
            selected
          >
            <Avatar variant='square' src={Users}></Avatar>
            <ListItemText className={classes.listItemText} primary='Users' />
          </ListItem>
          <ListItem className={classes.button} button key={Projects}>
            <Avatar variant='square' src={Projects}></Avatar>
            <ListItemText className={classes.listItemText} primary='Projects' />
          </ListItem>
          <ListItem className={classes.button} button key={User}>
            <Avatar variant='square' src={User}></Avatar>

            <ListItemText className={classes.listItemText} primary='Profile' />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}

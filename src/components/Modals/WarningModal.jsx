import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import SvgIcon from '@material-ui/core/SvgIcon';

import { ReactComponent as WarningIcon }  from './../../assets/icons/warning.svg';
import { Button } from '../Button/Button';
import { CustomModal } from './Modal';

const useStyles = makeStyles(() => ({
  titleWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginLeft: '10px',
    margin: 0,
    fontSize: '36px',
    fontWeight: '400',
  },
  buttonsWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent:'space-between',
  },
  btn: {
    width: '215px',
    height: '37px',
  }
}));

export const WarningModal = ({description}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const title = (
    <div className={classes.titleWrapper}>
      <SvgIcon>
        <WarningIcon />
      </SvgIcon>
      <h2 className={classes.title}>Warning</h2>
    </div>
  )

  const content = (
    <p>
      {description}
    </p>
  )

  const footer = (
    <div className={classes.buttonsWrapper}>
      <Button color='primary' children='Yes' fullWidth className={classes.btn}/>
      <Button children='No' fullWidth className={classes.btn}/>
    </div>
  )

  return (
    <>
      <button type="button" onClick={handleOpen}>
        Open Modal
      </button>
      <CustomModal
        width='487px'
        height='196px'
        title={title}
        content={content}
        footer={footer}
        open={open}
        className
        handleClose={handleClose}/>
    </>
  )
}
import MUICheckbox from '@material-ui/core/Checkbox';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { useField } from 'formik';

const useStyles = makeStyles((theme) => ({
  root: {
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    borderRadius: 0,
    width: 16,
    height: 16,
    border: '1px solid #CCCCCC',
    'input:checked ~ &': {
      boxShadow: 'none',
      borderColor: theme.palette.primary.main,
    },
  },
  checkedIcon: {
    display: 'block',
    content: '""',
    backgroundColor: theme.palette.primary.main,
    backgroundImage:
      'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
  },
}));

const Checkbox = ({ children, ...props }) => {
  console.log(children);
  const classes = useStyles();
  const [field, meta] = useField({ ...props, type: 'checkbox' });
  return (
    <>
      <MUICheckbox
        checkedIcon={
          <span className={clsx(classes.icon, classes.checkedIcon)} />
        }
        icon={<span className={classes.icon} />}
        {...field}
        {...props}
      >
        {children}
      </MUICheckbox>
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

export default Checkbox;

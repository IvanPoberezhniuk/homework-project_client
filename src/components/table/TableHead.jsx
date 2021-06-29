import { makeStyles } from '@material-ui/core/styles';
import MUITableHead from '@material-ui/core/TableHead';

const useStyles = makeStyles({
  root: {
    backgroundColor: '#EFEFEF',
  },
});

const TableHead = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUITableHead className={classes.root} {...other}>
      {children}
    </MUITableHead>
  );
};

export default TableHead;

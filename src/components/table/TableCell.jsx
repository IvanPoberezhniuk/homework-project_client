import { makeStyles } from '@material-ui/core/styles';
import MUITableCell from '@material-ui/core/TableCell';

const useStyles = makeStyles({
  root: {
    borderBottom: 'none',
  },
});

const TableCell = ({ children, ...other }) => {
  const classes = useStyles();
  return (
    <MUITableCell classes={{ root: classes.root }} {...other}>
      {children}
    </MUITableCell>
  );
};

export default TableCell;

import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '../table/TableCell';
import TableContainer from '../table/TableContainer';
import TableHead from '../table/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Paper from '@material-ui/core/Paper';
import SvgIcon from '@material-ui/core/SvgIcon';
import TableTeamAvatar from '../table/TableTeamAvatar';

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';
import { ReactComponent as FinishIcon } from '../../assets/icons/finish.svg';

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein };
};

const rows = [
  createData('myPRojecst', '05.11.2009', '05.11.2009', 67, 4.3),
  createData('Busines PRoject', '11.01.2001', '05.11.2009', 51, 4.9),
  createData('NOt a project', '11.01.2001', '01.11.2019', 24, 6.0),
  createData('Fake Project', '11.01.2001', '05.11.2019', 24, 4.0),
  createData('ua project', '01.01.2201', '05.11.20-8', 49, 3.9),
  createData('by project', '11.01.2001', '05.12.2009', 87, 6.5),
  createData('react project', '11.01.2001', '05.11.2009', 4.3),
  createData('project', '11.01.2001', '05.11.2009', 0.0),
  createData('bitcoin project', '11.11.2001', '05.11.2009', 65, 7.0),
  createData('lokk like a project', '11.01.2001', '05.11.2019', 98, 0.0),
  createData('Marshmallow project', '11.01.2001', '05.11.2001', 81, 2.0),
  createData('cars project', '11.04.2301', '07.11.2003', 9, 37.0),
  createData('alalalal', '10.01.2001', '11.11.2009', 63, 4.0),
];

const descendingComparator = (a, b, orderBy) => {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
};

const getComparator = (order, orderBy) => {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
};

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: 'Project Name',
    numeric: false,
    disablePadding: true,
    label: 'Project Name',
  },
  {
    id: 'Start Date',
    numeric: true,
    disablePadding: false,
    label: 'Start Date',
  },
  { id: 'End Date', numeric: true, disablePadding: false, label: 'End Date' },
  { id: 'Status', numeric: true, disablePadding: false, label: 'Status' },
  { id: 'Team', numeric: true, disablePadding: false, label: 'Team' },
];

const EnhancedTableHead = (props) => {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell />
      </TableRow>
    </TableHead>
  );
};

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(['asc', 'desc']).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: 0,
    boxShadow: 'none',
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const EnhancedTable = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('calories');
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const isSelected = (name) => selected.indexOf(name) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          <Table
            className={classes.table}
            aria-labelledby='tableTitle'
            aria-label='enhanced table'
          >
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, index) => {
                  const isItemSelected = isSelected(row.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, row.name)}
                      role='checkbox'
                      aria-checked={isItemSelected}
                      tabIndex={-1}
                      key={row.name}
                      selected={isItemSelected}
                    >
                      <TableCell component='th' id={labelId} scope='row'>
                        {row.name}
                      </TableCell>
                      <TableCell>{row.calories}</TableCell>
                      <TableCell>{row.fat}</TableCell>
                      <TableCell>{row.carbs}</TableCell>
                      <TableCell>
                        <TableTeamAvatar>TE</TableTeamAvatar>
                      </TableCell>
                      <TableCell>
                        <SvgIcon>
                          <PencilIcon />
                        </SvgIcon>
                        <SvgIcon>
                          <FinishIcon />
                        </SvgIcon>
                        <SvgIcon>
                          <FinishIcon />
                        </SvgIcon>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default EnhancedTable;

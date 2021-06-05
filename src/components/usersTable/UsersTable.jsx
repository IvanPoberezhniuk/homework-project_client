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

import { ReactComponent as PencilIcon } from '../../assets/icons/pencil.svg';
import { ReactComponent as TrashIcon } from '../../assets/icons/trash.svg';
import { ReactComponent as MoreIcon } from '../../assets/icons/more.svg';
import { getComparator, stableSort } from '../../helpers/table';

const createData = (name, role, projects) => {
  return { name, role, projects };
};

const rows = [
  createData('myPRojecst', '05.11.2009', '05.11.2009'),
  createData('Busines PRoject', '11.01.2001', '05.11.2009'),
  createData('NOt a project', '11.01.2001', '01.11.2019'),
  createData('Fake Project', '11.01.2001', '05.11.2019'),
  createData('ua project', '01.01.2201', '05.11.20-8'),
  createData('by project', '11.01.2001', '05.12.2009'),
  createData('react project', '11.01.2001', '05.11.2009'),
  createData('project', '11.01.2001', '05.11.2009'),
  createData('bitcoin project', '11.11.2001', '05.11.2009'),
  createData('lokk like a project', '11.01.2001', '05.11.2019'),
];

const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Role',
  },
  { id: 'projects', numeric: false, disablePadding: false, label: 'Projects' },
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
  optionsCell: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const EnhancedTable = () => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('name');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

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
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={row.name}
                    >
                      <TableCell component='th' id={labelId} scope='row'>
                        {row.name}
                      </TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>
                        <SvgIcon>
                          <MoreIcon height={24} width={24} />
                        </SvgIcon>
                      </TableCell>
                      <TableCell>
                        <div className={classes.optionsCell}>
                          <SvgIcon>
                            <PencilIcon height={24} width={24} />
                          </SvgIcon>
                          <SvgIcon>
                            <TrashIcon height={24} width={24} />
                          </SvgIcon>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                }
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default EnhancedTable;

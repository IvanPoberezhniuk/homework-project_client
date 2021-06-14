import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import {
  Table,
  TableBody,
  LinearProgress,
  TableRow,
  TableSortLabel,
  Paper,
} from '@material-ui/core';

import {
  TableCell,
  TableContainer,
  TableHead,
  TableTeamAvatar,
} from '../../../components';

import {
  EditIcon,
  FinishIcon,
  TrashIcon,
  StartIcon,
} from '../../../components/shared/icons';
import { getComparator, stableSort } from '../../../helpers/table';

const headCells = [
  {
    id: 'projectName',
    numeric: false,
    disablePadding: true,
    label: 'Project Name',
  },
  {
    id: 'startDate',
    numeric: false,
    disablePadding: false,
    label: 'Start Date',
  },
  { id: 'endDate', numeric: false, disablePadding: false, label: 'End Date' },
  { id: 'status', numeric: false, disablePadding: false, label: 'Status' },
  { id: 'team', numeric: false, disablePadding: false, label: 'Team' },
];

const EnhancedTableHead = ({ classes, order, orderBy, onRequestSort }) => {
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
  teamCell: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    border: 'none',
  },
  moreIcon: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'center',
  },
  optionsCell: {
    padding: '0 10px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  test: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },
}));

const EnhancedTable = ({ rows, isLoading }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('projectName');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <TableContainer>
          {isLoading && <LinearProgress />}
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
            <TableBody className={classes.tableBody}>
              {stableSort(rows, getComparator(order, orderBy)).map(
                (row, index) => {
                  const labelId = `enhanced-table-checkbox-${index}`;
                  return (
                    <TableRow
                      hover
                      role='checkbox'
                      tabIndex={-1}
                      key={`${row.name} ${index}`}
                    >
                      <TableCell component='th' id={labelId} scope='row'>
                        {row.projectName}
                      </TableCell>
                      <TableCell>{row.startDate}</TableCell>
                      <TableCell>{row.endDate}</TableCell>
                      <TableCell>{row.status}</TableCell>
                      <TableCell className={classes.teamCell}>
                        <TableTeamAvatar className={classes.moreIcon}>
                          TE
                        </TableTeamAvatar>
                        <div className={classes.moreIcon}></div>
                      </TableCell>
                      <TableCell>
                        <div className={classes.optionsCell}>
                          <FinishIcon />
                          <EditIcon />
                          <TrashIcon />
                          <StartIcon />
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

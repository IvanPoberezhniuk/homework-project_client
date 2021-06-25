import React from 'react';

import { useHistory, useLocation } from 'react-router-dom';

import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { TableCell, TableContainer } from '../../../components';
import {
  EditIcon,
  MoreIcon,
  TrashIcon,
} from '../../../components/shared/icons';
import { getComparator, stableSort } from '../../../helpers/table';
import { MODAL_USER } from '../../../router/ModalSwitcher';
import EnhancedTableHead from '../table/EnchanedTableHead';

const headCells = [
  {
    id: 'firstName',
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

const EnhancedTable = ({ rows }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

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
          {!rows.length && <LinearProgress />}
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
              headCells={headCells}
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
                        {row.firstName} {row.lastName}
                      </TableCell>
                      <TableCell>{row.role}</TableCell>
                      <TableCell>
                        <MoreIcon
                          onClick={() => {
                            history.push(
                              `/user/${MODAL_USER.PROJECTS}/${row.id}`,
                              {
                                background: location,
                                user: row,
                              }
                            );
                          }}
                        />
                      </TableCell>
                      <TableCell>
                        <div className={classes.optionsCell}>
                          <EditIcon
                            onClick={() => {
                              history.push(
                                `/user/${MODAL_USER.EDIT}/${row.id}`,
                                {
                                  background: location,
                                  user: row,
                                }
                              );
                            }}
                          />
                          <TrashIcon
                            onClick={() => {
                              history.push(
                                `/user/${MODAL_USER.DELETE}/${row.id}`,
                                {
                                  background: location,
                                  user: row,
                                }
                              );
                            }}
                          />
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

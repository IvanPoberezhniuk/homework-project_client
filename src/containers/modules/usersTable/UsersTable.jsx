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
  {
    id: 'projects',
    numeric: false,
    disablePadding: false,
    label: 'Projects',
    sortable: false,
  },
];

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2),
    borderRadius: 0,
    boxShadow: 'none',
  },
  table: {
    minWidth: 750,
  },

  actions__container: {
    border: 'none',
    display: 'grid',
    gridTemplateColumns: 'auto 58px 58px',
    gridTemplateRows: '52px',
    alignItems: 'center',
    justifyItems: 'end',
  },
  moreIcon__container: {
    display: 'flex',
    alignItems: 'center',
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
    <Paper className={classes.paper}>
      <TableContainer>
        {!rows.length && <LinearProgress />}
        <Table
          className={classes.table}
          aria-labelledby='tableTitle'
          aria-label='enhanced table'
        >
          <EnhancedTableHead
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
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                    <TableCell id={labelId} scope='row'>
                      {row.firstName} {row.lastName}
                    </TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <div className={classes.moreIcon__container}>
                        <MoreIcon
                          onClick={() => {
                            history.push(
                              `/user/${MODAL_USER.PROJECTS}/${row.id}`,
                              {
                                background: location,
                                payload: row,
                              }
                            );
                          }}
                        />
                      </div>
                    </TableCell>
                    <TableCell
                      size='small'
                      className={classes.actions__container}
                    >
                      <EditIcon
                        onClick={() => {
                          history.push(`/user/${MODAL_USER.EDIT}/${row.id}`, {
                            background: location,
                            payload: row,
                          });
                        }}
                      />
                      <TrashIcon
                        onClick={() => {
                          history.push(`/user/${MODAL_USER.DELETE}/${row.id}`, {
                            background: location,
                            payload: row,
                          });
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              }
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};

export default EnhancedTable;

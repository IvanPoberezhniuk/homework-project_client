import { useState } from 'react';

import { TableCell, TableContainer } from 'components';
import { EditIcon, MoreIcon, TrashIcon } from 'components/shared/icons';
import { getComparator, stableSort } from 'helpers/table';
import { useHistory, useLocation } from 'react-router-dom';
import { OPERATIONS, ENTITY } from 'router/ModalSwitcher';

import {
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TablePagination,
  TableRow,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  paginationSelect: {
    top: 0,
  },
}));

const EnhancedTable = ({ rows }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('firstName');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [page, setPage] = useState(0);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

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
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow hover role='checkbox' tabIndex={-1} key={row.id}>
                    <TableCell id={labelId} scope='row'>
                      {row.firstName} {row.lastName}
                    </TableCell>
                    <TableCell>{row.roleName}</TableCell>
                    <TableCell>
                      <div className={classes.moreIcon__container}>
                        <MoreIcon
                          onClick={() => {
                            history.push(
                              `/${ENTITY.USERS}/${row.userId}/${OPERATIONS.PROJECTS}`,
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
                          history.push(`/${ENTITY.USERS}/${row.userId}/${OPERATIONS.EDIT}`, {
                            background: location,
                            payload: row,
                          });
                        }}
                      />
                      <TrashIcon
                        onClick={() => {
                          history.push(`/${ENTITY.USERS}/${row.userId}/${OPERATIONS.DELETE}`, {
                            background: location,
                            payload: row,
                          });
                        }}
                      />
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 64 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          classes={{ selectIcon: classes.paginationSelect }}
        />
      </TableContainer>
    </Paper>
  );
};

export default EnhancedTable;

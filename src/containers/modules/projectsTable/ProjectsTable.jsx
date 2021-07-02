import { useState } from 'react';

import { TableCell, TableContainer, TableTeamAvatar } from 'components';
import {
  EditIcon,
  FinishIcon,
  MoreIcon,
  StartIcon,
  TrashIcon,
} from 'components/shared/icons';
import { getComparator, stableSort } from 'helpers/table';
import { useHistory, useLocation } from 'react-router-dom';
import { MODAL_PROJECT } from 'router/ModalSwitcher';

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
  {
    id: 'team',
    numeric: false,
    disablePadding: false,
    label: 'Team',
    sortable: false,
  },
];

const useStyles = makeStyles((theme) => ({
  actions__container: {
    alignItems: 'center',
    border: 'none',
    display: 'grid',
    gridTemplateColumns: '58px  58px 58px',
    gridTemplateRows: '52px',
    justifyContent: 'end',
  },
  avatar: {
    position: 'absolute',
  },
  avatar__container: {
    display: 'flex',
    position: 'relative',
  },
  editIcon: {
    gridColumnStart: '2',
  },
  paginationSelect: {
    top: 0,
  },
  paper: {
    borderRadius: 0,
    boxShadow: 'none',
    marginBottom: theme.spacing(2),
    width: '100%',
  },
  table: {
    minWidth: 750,
  },
  teamCell: {
    alignItems: 'center',
    border: 'none',
    position: 'relative',
  },
  trashIcon: {
    gridColumnStart: '3',
  },
}));

const EnhancedTable = ({ rows, isLoading }) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('projectName');
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
        {isLoading && <LinearProgress />}
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
          <TableBody className={classes.tableBody}>
            {stableSort(rows, getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const labelId = `enhanced-table-checkbox-${index}`;
                return (
                  <TableRow
                    hover
                    role='checkbox'
                    tabIndex={-1}
                    key={`${row.id}`}
                  >
                    <TableCell id={labelId} scope='row'>
                      {row.projectName}
                    </TableCell>
                    <TableCell>{row.startDate || '-'}</TableCell>
                    <TableCell>{row.endDate || '-'}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell className={classes.teamCell}>
                      <div className={classes.avatar__container}>
                        {row.users.slice(0, 4).map((person, index) => (
                          <TableTeamAvatar
                            key={person.id}
                            classes={{ root: classes.avatar }}
                            style={{ left: 16 * index + 'px' }}
                            size={30}
                          >
                            {person.firstName[0] + person.lastName[0]}
                          </TableTeamAvatar>
                        ))}
                        <MoreIcon
                          onClick={() => {
                            history.push(
                              `/project/${MODAL_PROJECT.TEAM}/${row.id}`,
                              {
                                background: location,
                                payload: row,
                              }
                            );
                          }}
                          className={classes.moreIcon}
                          style={{
                            marginLeft:
                              row.users.length &&
                              row.users.length * 16 + 32 + 'px',
                          }}
                        />
                      </div>
                    </TableCell>
                    <TableCell
                      size='small'
                      className={classes.actions__container}
                    >
                      {!row.startDate && !row.endDate && (
                        <StartIcon
                          className={classes.startIcon}
                          onClick={() => {
                            history.push(
                              `/project/${MODAL_PROJECT.START}/${row.id}`,
                              {
                                background: location,
                                payload: row,
                              }
                            );
                          }}
                        />
                      )}
                      {row.startDate && !row.endDate && (
                        <FinishIcon
                          className={classes.finishIcon}
                          onClick={() => {
                            history.push(
                              `/project/${MODAL_PROJECT.FINISH}/${row.id}`,
                              {
                                background: location,
                                payload: row,
                              }
                            );
                          }}
                        />
                      )}
                      <EditIcon
                        className={classes.editIcon}
                        onClick={() => {
                          history.push(
                            `/project/${MODAL_PROJECT.EDIT}/${row.id}`,
                            {
                              background: location,
                              payload: row,
                            }
                          );
                        }}
                      />
                      <TrashIcon
                        className={classes.trashIcon}
                        onClick={() => {
                          history.push(
                            `/project/${MODAL_PROJECT.DELETE}/${row.id}`,
                            {
                              background: location,
                              payload: row,
                            }
                          );
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
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component='div'
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        classes={{ selectIcon: classes.paginationSelect }}
      />
    </Paper>
  );
};

export default EnhancedTable;

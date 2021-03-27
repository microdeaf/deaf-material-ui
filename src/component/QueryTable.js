import React from 'react';
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow
} from '@material-ui/core';
// import EditOutlined from '@material-ui/icons/EditOutlined';
import { Link } from 'react-router-dom';
import { QueryTableStyle } from '../css';
import { QueryTableEnum } from '../enum';
import Icon from './Icon';
import PropTypes from 'prop-types';

function QueryTable ({ rows, columns, onEdit, onPrint }) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const classes = QueryTableStyle();

  const _onChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const _onChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const _onEdit = row => {
    onEdit(row);
  }

  const _onPrint = row => {
    onPrint(row);
  }

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map(column => {
                    let value;
                    if (column.id === QueryTableEnum.EDIT) {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to={column.to} className={classes.link} onClick={() => { _onEdit(row) }}>
                            <Icon name="EditOutlined" className={classes.handCursor} />
                          </Link>
                        </TableCell>
                      )
                    } else if (column.id === QueryTableEnum.PRINT) {
                      return (
                        <TableCell key={column.id} align={column.align}>
                          <Link to={column.to} className={classes.link} onClick={() => { _onPrint(row) }}>
                            <Icon name="PrintOutlined" className={classes.handCursor} />
                          </Link>
                        </TableCell>
                      )
                    } else if (column.id === 'fullName') {
                      value = row.firstName + ' ' + row.lastName
                    } else {
                      value = row[column.id];
                    }
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={_onChangePage}
        onChangeRowsPerPage={_onChangeRowsPerPage}
      />
    </Paper>
  );
}

QueryTable.propTypes = {
  rows: PropTypes.array,
  columns: PropTypes.array,
  onEdit: PropTypes.func,
  onPrint: PropTypes.func
}

export default QueryTable;

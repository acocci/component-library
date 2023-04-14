/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { get } from 'lodash';
import React, { SetStateAction, useState } from 'react';

import { ReactEvent } from '../../../generic.types';
import { ISortTableProps, Order } from '../tables.types';

const SortableTable = ({
  columns,
  defaultSort = 'asc',
  defaultSortedCol,
  rows,
  size,
  stickyHeader = true,
}: ISortTableProps) => {
  const [order, setOrder] = useState<Order>(defaultSort);
  const [orderBy, setOrderBy] = useState<string>(defaultSortedCol || columns[0].id);

  const handleRequestSort = (_event: ReactEvent, property: SetStateAction<string>) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  function descendingComparator<T>(a: T, b: T, sortBy: keyof T) {
    // convert to lowercase if string for proper sorting
    const asort = typeof a[sortBy] === 'string' ? String(a[sortBy]).toLowerCase() : a[sortBy];
    const bsort = typeof b[sortBy] === 'string' ? String(b[sortBy]).toLowerCase() : b[sortBy];
    if (bsort < asort) {
      return -1;
    }
    if (bsort > asort) {
      return 1;
    }
    return 0;
  }

  function getComparator<Key extends keyof any>(
    dir: Order,
    sortBy: Key,
  ): (a: { [key in Key]: number | string }, b: { [key in Key]: number | string }) => number {
    return dir === 'desc'
      ? (a, b) => descendingComparator(a, b, sortBy)
      : (a, b) => -descendingComparator(a, b, sortBy);
  }

  function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
      const dir = comparator(a[0], b[0]);
      if (dir !== 0) {
        return dir;
      }
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  return (
    <TableContainer component={Paper}>
      <Table stickyHeader={stickyHeader} size={size}>
        <TableHead>
          <TableRow>
            {columns &&
              columns.map(column => (
                <TableCell
                  align={column.align}
                  key={column.id}
                  sx={{ maxWidth: column.maxWidth, minWidth: column.minWidth, width: column.width }}
                  sortDirection={orderBy === column.id ? order : false}
                >
                  {column.disableSorting && (
                    <Box component="span" sx={{ cursor: 'default' }}>
                      {column.label}
                    </Box>
                  )}
                  {!column.disableSorting && (
                    <TableSortLabel
                      active={orderBy === column.id}
                      direction={orderBy === column.id ? order : 'asc'}
                      onClick={e => handleRequestSort(e, column.id)}
                    >
                      {column.label}
                      {orderBy === column.id ? (
                        <Box component="span" sx={visuallyHidden}>
                          {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                        </Box>
                      ) : null}
                    </TableSortLabel>
                  )}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {stableSort(rows, getComparator(order, orderBy)).map((row, index) => {
            const labelId = `row-${index}`;

            return (
              <TableRow key={labelId} hover>
                {columns.map((column, colIndex) => {
                  const value = get(row, column.id);
                  return (
                    <TableCell
                      align={column.align}
                      component={colIndex === 0 ? 'th' : 'td'}
                      id={colIndex === 0 ? labelId : ''}
                      key={column.id}
                      scope={colIndex === 0 ? 'row' : ''}
                    >
                      {column.format ? column.format(value, index, row) : value}
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default SortableTable;

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import { get } from 'lodash';

import { ITableProps } from 'components/ui';

const BasicTable = ({ columns, rows, size, stickyHeader = true }: ITableProps) => (
  <TableContainer component={Paper}>
    <Table stickyHeader={stickyHeader} aria-label="sticky table" size={size}>
      <TableHead>
        <TableRow>
          {columns &&
            columns.map(column => (
              <TableCell
                align={column.align}
                key={column.id}
                sx={{ maxWidth: column.maxWidth, minWidth: column.minWidth, width: column.width }}
              >
                {column.label}
              </TableCell>
            ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
          <TableRow key={index} hover>
            {columns.map(column => {
              const value = get(row, column.id);
              return (
                <TableCell key={column.id} align={column.align}>
                  {column.format ? column.format(value, index, row) : value}
                </TableCell>
              );
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default BasicTable;

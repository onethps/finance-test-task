import React from 'react';
import { styled } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

function TicketsTableHead() {
  return (
    <TableHead>
      <TableRow>
        <StyledTableCell>Ticker</StyledTableCell>
        <StyledTableCell align='right'>Exchange</StyledTableCell>
        <StyledTableCell align='right'>Price</StyledTableCell>
        <StyledTableCell align='right'>Change</StyledTableCell>
        <StyledTableCell align='right'>Change Percent</StyledTableCell>
        <StyledTableCell align='right'>Actions</StyledTableCell>
      </TableRow>
    </TableHead>
  );
}

export default TicketsTableHead;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

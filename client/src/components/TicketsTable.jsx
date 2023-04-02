import React from "react";
import { styled } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function TicketsTable({ data }) {
  return (
    <TableContainer
      sx={{
        mt: "50px",
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Ticker</StyledTableCell>
            <StyledTableCell align="right">Exchange</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Change</StyledTableCell>
            <StyledTableCell align="right">Change Percent</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            ? data.map((row, idx) => (
                <StyledTableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.ticker}
                  </TableCell>
                  <TableCell align="right" color="primary">
                    {row.exchange}
                  </TableCell>
                  <TableCell align="right">{row.price} $</TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      color: row.change_percent > 0 ? "green" : "red",
                    }}
                  >
                    {row.change} $
                  </TableCell>
                  <TableCell
                    sx={{
                      color: row.change_percent > 0 ? "green" : "red",
                    }}
                    align="right"
                  >
                    {row.change_percent} %
                  </TableCell>
                </StyledTableRow>
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TicketsTable;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

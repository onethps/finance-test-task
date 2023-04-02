import React from "react";
import { styled } from "@mui/material";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import usePrevious from "../../hooks/usePrevious";

function TableDataRow({ rowData }) {
  const { ticker, exchange, change, price, change_percent } = rowData;

  const previousPrice = usePrevious(price);
  const isGreaterPrice = previousPrice && price > previousPrice;
  const isLessPrice = previousPrice && price < previousPrice;

  return (
    <StyledTableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {ticker}
      </TableCell>
      <TableCell align="right" color="primary">
        {exchange}
      </TableCell>
      <TableCell align="right">{price} $</TableCell>
      <TableCell
        align="right"
        sx={{
          color: isGreaterPrice > 0 ? "green" : "red",
        }}
      >
        {change} $
      </TableCell>
      <TableCell
        sx={{
          color: isLessPrice > 0 ? "green" : "red",
        }}
        align="right"
      >
        {change_percent} %
      </TableCell>
    </StyledTableRow>
  );
}
export default TableDataRow;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TicketsTableBodyRow from "./TicketsTableBodyRow";
import TicketsTableHead from "./TicketsTableHead";

function TicketsTable({ data }) {
  return (
    <TableContainer
      sx={{
        mt: "50px",
      }}
      component={Paper}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TicketsTableHead />
        <TableBody>
          {data
            ? data.map((rowData, idx) => (
                <TicketsTableBodyRow key={idx} rowData={rowData} />
              ))
            : null}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TicketsTable;

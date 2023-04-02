import React from 'react';
import { IconButton, styled } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import usePrevious from '../../hooks/usePrevious';
import DeleteIcon from '@mui/icons-material/Delete';
import PriceCellVariant from './PriceCellVariant';
import { socket } from '../../lib/socket';

function TicketsTableBodyRow({ rowData }) {
  const { ticker, exchange, change, price, change_percent } = rowData;

  const previousPrice = usePrevious(price);
  const isGreaterPrice = previousPrice && price > previousPrice;

  const handleDeleteTicker = () => {
    socket.emit('deleteItem', ticker);
  };

  return (
    <StyledTableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
      <TableCell component='th' scope='row'>
        {ticker}
      </TableCell>
      <TableCell align='right' color='primary'>
        {exchange}
      </TableCell>
      <TableCell align='right'>{price} $</TableCell>
      <TableCell align='right'>
        <PriceCellVariant isGreaterPrice={isGreaterPrice} value={change} />
      </TableCell>
      <TableCell align='right'>
        <PriceCellVariant
          padding='10px'
          backgroundColor={isGreaterPrice ? '#e6f4ea' : '#fce8e6'}
          isGreaterPrice={isGreaterPrice}
          value={change_percent}
          symbol={'%'}
        />
      </TableCell>
      <TableCell align='right'>
        <IconButton onClick={handleDeleteTicker}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </StyledTableRow>
  );
}
export default TicketsTableBodyRow;

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

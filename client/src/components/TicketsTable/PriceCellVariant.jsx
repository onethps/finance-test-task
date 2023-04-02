import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import NorthIcon from '@mui/icons-material/North';
import SouthIcon from '@mui/icons-material/South';

function PriceCellVariant({ isGreaterPrice, value, symbol, ...props }) {
  return (
    <Box {...props} display='inline-block' borderRadius='10px'>
      <Stack flexDirection='row' gap='5px' alignItems='center'>
        {isGreaterPrice ? (
          <NorthIcon fontSize='10px' htmlColor='green' />
        ) : (
          <SouthIcon fontSize='10px' htmlColor='red' />
        )}
        <Typography
          variant='body2'
          color={isGreaterPrice ? 'success.main' : 'error.light'}
        >
          {value} {symbol ? symbol : '$'}
        </Typography>
      </Stack>
    </Box>
  );
}
export default PriceCellVariant;

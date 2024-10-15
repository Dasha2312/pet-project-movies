import { Box, Container } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import useGetWatchLater from '../../hooks/useGetWatchLater';
import Grid from '@mui/material/Grid2';
import useAddToWatch from '../../hooks/useAddToWatch';
import WatchLaterContent from '../../components/WatchLaterContent/WatchLaterContent';

function WatchLater() {
  const countWatchLater = useSelector(state => state.countWatchLater.count);
  
  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box>
          <Box component='h1'>Watch Later: {countWatchLater}</Box>
        </Box>

        <Box>
          <WatchLaterContent />
        </Box>
      </Container>
    </Box>
  );
}

export default WatchLater;
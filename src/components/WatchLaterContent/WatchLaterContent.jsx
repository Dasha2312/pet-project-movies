import React from 'react';
import useAddToWatch from '../../hooks/useAddToWatch';
import useGetWatchLater from '../../hooks/useGetWatchLater';

import Grid from '@mui/material/Grid2';
import MediaBlock from '../MediaBlock/MediaBlock';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box } from '@mui/material';
import WatchLaterMediaBlock from '../MediaBlock/WatchLaterMediaBlock';
import useRemoveWatchLater from '../../hooks/useRemoveWatchLater';


function WatchLaterContent() {
  const {pendingWatchLater, allWatchLeter} = useGetWatchLater();
  const {removeWatchLater} = useRemoveWatchLater()

  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];
  

  function removeFromWatchLater(movieId) {
    removeWatchLater(movieId)
  }

  console.log('allWatchLeter', allWatchLeter)

  if(pendingWatchLater) {
    return (
      <Box>Loading...</Box>
    )
  }
  return (
    <>
      {
        allWatchLeter?.length > 0 ? (
          <Grid container columnSpacing={2} rowSpacing={3}>
            {
              allWatchLeter?.map(item => {
                const isAddedToWatchLater = allWatchLeter?.some(watchLaterItem => watchLaterItem.movieId == item.movieId)
                return (
                  <Grid size={{ xs: 12, md: 6, xl: 3 }} key={item.id}>
                    <WatchLaterMediaBlock 
                      imagePosterSizes={imagePosterSizes} 
                      imagesBaseUrl={imagesBaseUrl} 
                      media={item} 
                      removeFromWatchLater={removeFromWatchLater} 
                      isAddedToWatchLater={isAddedToWatchLater} 
                    />
                  </Grid>
                )
              })
            }
          </Grid>
        ) : (
          <Box>You don't have movies in this list</Box>
        )
      }
        
    </>
  );
}

export default WatchLaterContent;
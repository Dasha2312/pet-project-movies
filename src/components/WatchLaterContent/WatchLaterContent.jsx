import React from 'react';
import useAddToWatch from '../../hooks/useAddToWatch';
import useGetWatchLater from '../../hooks/useGetWatchLater';

import Grid from '@mui/material/Grid2';
import MediaBlock from '../MediaBlock/MediaBlock';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box } from '@mui/material';

function WatchLaterContent() {
  const {pendingWatchLater, allWatchLeter} = useGetWatchLater();
  const {addWatch, addWatchPending} = useAddToWatch();

  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];

  function addToWatchLater(newMovieLater) {
    addWatch({...newMovieLater, userId: currentUser.id})
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
                const isAddedToWatchLater = allWatchLeter?.some(watchLaterItem => watchLaterItem.movieId == item.id)
                return (
                  <Grid size={{ xs: 12, md: 6, xl: 3 }} key={item.id}>
                    <MediaBlock imagePosterSizes={imagePosterSizes} 
                      imagesBaseUrl={imagesBaseUrl} 
                      media={item} 
                      addToWatchLater={addToWatchLater} 
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
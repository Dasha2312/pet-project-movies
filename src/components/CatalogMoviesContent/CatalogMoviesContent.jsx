import { useConfiguration } from "../../hooks/useConfiguration";
import Grid from '@mui/material/Grid2';
import MediaBlock from "../MediaBlock/MediaBlock";


function CatalogMoviesContent({discoverMovie, allWatchLater, addToWatchLater}) {
    const {configuration} = useConfiguration();
    const imagesBaseUrl = configuration?.imagesBaseUrl;
    const imagePosterSizes = configuration?.imagePosterSizes[5];

  return (
    <Grid container columnSpacing={2} rowSpacing={3}>
      {
        discoverMovie?.results.map(item => {
          const isAddedToWatchLater = allWatchLater?.some(watchLaterItem => watchLaterItem.movieId == item.id)
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
  );
}

export default CatalogMoviesContent;
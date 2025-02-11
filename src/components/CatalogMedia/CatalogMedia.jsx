import Grid from '@mui/material/Grid2';
import PaginationBlock from '../../UI/PaginationBlock/PaginationBlock';
import MediaBlock from '../MediaBlock/MediaBlock';
import { Box } from '@mui/material';


function CatalogMedia({discoverMovie, currentReviewPage, nextReviewPage, imagePosterSizes, imagesBaseUrl, isAuthenticated, openLogInModal}) {

  console.log('openLogInModal 1: ', openLogInModal)

  if(discoverMovie?.results == '') {
    return (
      <Box>There are no movies that matched your query.</Box>
    )
  }

  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={3}>
        {
          discoverMovie?.results.map(item => (
            <Grid size={{ xs: 12, md: 6, xl: 3 }} key={item.id}>
              <MediaBlock imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} media={item} openLogInModal={openLogInModal} isAuthenticated={isAuthenticated} />
            </Grid>
          ))
        }
      </Grid>
      <PaginationBlock result={discoverMovie} total_pages={discoverMovie?.total_pages} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage}  />
    </>
  );
}

export default CatalogMedia;
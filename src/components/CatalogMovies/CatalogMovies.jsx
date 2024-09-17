import Grid from '@mui/material/Grid2';
import PaginationBlock from '../../UI/PaginationBlock/PaginationBlock';
import MediaBlock from '../MediaBlock/MediaBlock';

function CatalogMovies({discoverMovie, currentReviewPage, nextReviewPage, imagePosterSizes, imagesBaseUrl}) {
  return (
    <>
      <Grid container columnSpacing={2} rowSpacing={3}>
        {
          discoverMovie?.results.map(item => (
            <Grid size={{ xs: 12, md: 6, xl: 3 }} key={item.id}>
              <MediaBlock imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} media={item} />
            </Grid>
          ))
        }
      </Grid>
      <PaginationBlock result={discoverMovie} total_pages={discoverMovie?.total_pages} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage}  />
    </>
  );
}

export default CatalogMovies;
import { useParams } from 'react-router-dom';
import useDiscoverMovies from '../../hooks/useDiscoverMovies';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box, Container } from '@mui/material';

import useGenreMovies from '../../hooks/useGenreMovies';
import { useEffect, useState } from 'react';

import Grid from '@mui/material/Grid2';


import style from "./CatalogMovies.module.scss"
import MediaBlock from '../../components/MediaBlock/MediaBlock';
import PaginationBlock from '../../UI/PaginationBlock/PaginationBlock';

import useAddToWatch from '../../hooks/useAddToWatch';
import useGetWatchLater from '../../hooks/useGetWatchLater';
import useUser from '../../hooks/Auth/useUser';


function CatalogMovies() {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [catalogPage, setCatalogPage] = useState(1);

  const {genreId} = useParams();
  const {currentUserData, isAuthenticated} = useUser();

  const {discoverMoviePending, discoverMovie, discoverMovieError} = useDiscoverMovies(genreId, catalogPage);
  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];

  const [catalogTitle, setCatalogTitle] = useState('');

  const {genreMoviesListPending, genreMoviesList, genreMoviesListError} = useGenreMovies(genreId);


  function nextReviewPage(event, value) {
    setCurrentReviewPage(value)
    setCatalogPage(value);
  }

  useEffect(() => {
    if (!genreMoviesListPending && genreId) {
      const currentGenre = genreMoviesList?.find(item => item.id === Number(genreId));
      setCatalogTitle(<span>All movies with genre: <strong>{currentGenre?.name}</strong></span>);
    } else {
      setCatalogTitle(`All Movies`);
    }
  }, [genreMoviesListPending, genreId]);

  const [openLogIn, setOpenLogInModal] = useState(false);
  ;

  const {pendingWatchLater, allWatchLeter} = useGetWatchLater();

  const {addWatch, addWatchPending} = useAddToWatch();

  function openLogInModal() {
    setOpenLogInModal(true)
  }

  function addToWatchLater(newMovieLater) {
    addWatch({...newMovieLater, userId: currentUserData.id})
  }

  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box className={style.catalog__header}>
          <Box component='h1' className={style.catalog__title}>{catalogTitle}</Box>
        </Box>
        <Box sx={{marginBottom: '40px'}}>
          <Grid container columnSpacing={2} rowSpacing={3}>
            {
              discoverMovie?.results.map(item => {
                const isAddedToWatchLater = allWatchLeter?.some(watchLaterItem => watchLaterItem.movieId == item.id)
                return (
                  <Grid size={{ xs: 12, md: 6, xl: 3 }} key={item.id}>
                    <MediaBlock imagePosterSizes={imagePosterSizes} 
                      imagesBaseUrl={imagesBaseUrl} 
                      media={item} 
                      openLogInModal={openLogInModal} 
                      addToWatchLater={addToWatchLater} 
                      isAddedToWatchLater={isAddedToWatchLater} 
                    />
                  </Grid>
                )
              })
            }
          </Grid>
          <PaginationBlock result={discoverMovie} total_pages={discoverMovie?.total_pages} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage}  />

        </Box>

      </Container>
    </Box>
  );
}

export default CatalogMovies;
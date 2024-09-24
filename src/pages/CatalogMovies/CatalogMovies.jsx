import { useParams } from 'react-router-dom';
import useDiscoverMovies from '../../hooks/useDiscoverMovies';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box, Container } from '@mui/material';

import useGenreMovies from '../../hooks/useGenreMovies';
import { useEffect, useState } from 'react';

import style from "./CatalogMovies.module.scss"
import CatalogMedia from '../../components/CatalogMedia/CatalogMedia';

function CatalogMovies() {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [catalogPage, setCatalogPage] = useState(1);

  const {genreId} = useParams();

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

  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box className={style.catalog__header}>
          <Box component='h1' className={style.catalog__title}>{catalogTitle}</Box>
        </Box>
        <Box sx={{marginBottom: '40px'}}>
          <CatalogMedia discoverMovie={discoverMovie} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage} imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} />
        </Box>
      </Container>
    </Box>
  );
}

export default CatalogMovies;
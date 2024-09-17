import { useParams } from 'react-router-dom';
import useDiscoverMovies from '../../hooks/useDiscoverMovies';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box, Container } from '@mui/material';
import MediaBlock from '../../components/MediaBlock/MediaBlock';
import Grid from '@mui/material/Grid2';
import useGenreMovies from '../../hooks/useGenreMovies';
import { useEffect, useState } from 'react';

import style from "./Catalog.module.scss"
import CatalogMovies from '../../components/CatalogMovies/CatalogMovies';
import CatalogSeries from '../../components/CatalogSeries/CatalogSeries';

function Catalog({ contentType }) {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [catalogPage, setCatalogPage] = useState(1);

  const {genreId} = useParams();
  const {discoverMoviePending, discoverMovie, discoverMovieError} = useDiscoverMovies(genreId, catalogPage);
  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];

  const [genreTitle, setGenreTitle] = useState('');
  const {genreMoviesListPending, genreMoviesList, genreMoviesListError} = useGenreMovies(genreId);

  function nextReviewPage(event, value) {
    setCurrentReviewPage(value)
    setCatalogPage(value);
  }

  useEffect(() => {
    if(!genreMoviesListPending && genreId) {
      const currentGenre = genreMoviesList?.find(item => item.id === Number(genreId))
      setGenreTitle(<span>All movies with genre: <strong>{currentGenre?.name}</strong></span>)
    }
  }, [genreMoviesListPending, genreId])

  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box className={style.catalog__header}>
          <Box component='h1' className={style.catalog__title}>{genreTitle ? genreTitle : `All ${contentType === 'movies' ? 'Movies' : 'Shows'}`}</Box>
        </Box>
        <Box sx={{marginBottom: '40px'}}>
          
            { contentType === 'movies' ? (
                <CatalogMovies discoverMovie={discoverMovie} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage} imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} />
              ) : (
                <CatalogSeries />
              )
              
            }
            
        </Box>

        
        
      </Container>
    </Box>
  );
}

export default Catalog;
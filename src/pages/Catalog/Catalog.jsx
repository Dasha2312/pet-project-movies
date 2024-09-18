import { useParams, useSearchParams } from 'react-router-dom';
import useDiscoverMovies from '../../hooks/useDiscoverMovies';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box, Container } from '@mui/material';

import useGenreMovies from '../../hooks/useGenreMovies';
import { useEffect, useState } from 'react';

import style from "./Catalog.module.scss"
import CatalogMedia from '../../components/CatalogMedia/CatalogMedia';
import useMovieSearch from '../../hooks/useMovieSearch';

function Catalog({ contentType }) {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [catalogPage, setCatalogPage] = useState(1);

  const {genreId} = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const {discoverMoviePending, discoverMovie, discoverMovieError} = contentType === 'movies' ? useDiscoverMovies(genreId, catalogPage) : '';
  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];

  const [catalogTitle, setCatalogTitle] = useState('');

  const {genreMoviesListPending, genreMoviesList, genreMoviesListError} = useGenreMovies(genreId);
  const {MovieSearchPending, MovieSearchList, MovieSearchError} = useMovieSearch(searchQuery, catalogPage)



  function nextReviewPage(event, value) {
    setCurrentReviewPage(value)
    setCatalogPage(value);
  }

  useEffect(() => {
    if (searchQuery) {
      setCatalogTitle(<span>Search result: <strong>{searchQuery}</strong></span>);
    } else if (!genreMoviesListPending && genreId) {
      const currentGenre = genreMoviesList?.find(item => item.id === Number(genreId));
      setCatalogTitle(<span>All movies with genre: <strong>{currentGenre?.name}</strong></span>);
    } else {
      setCatalogTitle(`All ${contentType === 'movies' ? 'Movies' : 'Shows'}`);
    }
  }, [genreMoviesListPending, genreId, searchQuery]);

  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box className={style.catalog__header}>
          <Box component='h1' className={style.catalog__title}>{catalogTitle}</Box>
        </Box>
        <Box sx={{marginBottom: '40px'}}>
          
            { contentType === 'movies' &&
                <CatalogMedia discoverMovie={discoverMovie} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage} imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} />
            }

            {
              contentType === 'shows' && <Box> shows empty</Box>
            }

            {
              contentType === 'search' && <CatalogMedia discoverMovie={MovieSearchList} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage} imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} />
            }
            
        </Box>

        
        
      </Container>
    </Box>
  );
}

export default Catalog;
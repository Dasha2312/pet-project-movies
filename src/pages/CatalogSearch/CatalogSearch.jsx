import { useParams, useSearchParams } from 'react-router-dom';
import { useConfiguration } from '../../hooks/useConfiguration';
import { Box, Container } from '@mui/material';

import { useEffect, useState } from 'react';

import style from "./CatalogSearch.module.scss"
import CatalogMedia from '../../components/CatalogMedia/CatalogMedia';
import useMovieSearch from '../../hooks/useMovieSearch';

function CatalogSearch() {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [catalogPage, setCatalogPage] = useState(1);

  const {genreId} = useParams();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchQuery');

  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];

  const [catalogTitle, setCatalogTitle] = useState('');

  const {MovieSearchPending, MovieSearchList, MovieSearchError} = useMovieSearch(searchQuery, catalogPage)


  function nextReviewPage(event, value) {
    setCurrentReviewPage(value)
    setCatalogPage(value);
  }

  useEffect(() => {
    if (searchQuery) {
      setCatalogTitle(<span>Search result: <strong>{searchQuery}</strong></span>);
    }
  }, [searchQuery]);

  return (
    <Box sx={{marginTop: '50px'}}>
      <Container>
        <Box className={style.catalog__header}>
          <Box component='h1' className={style.catalog__title}>{catalogTitle}</Box>
        </Box>
        <Box sx={{marginBottom: '40px'}}>
          <CatalogMedia discoverMovie={MovieSearchList} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage} imagePosterSizes={imagePosterSizes} imagesBaseUrl={imagesBaseUrl} />
        </Box>

        
        
      </Container>
    </Box>
  );
}

export default CatalogSearch;
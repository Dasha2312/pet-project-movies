import { useParams } from 'react-router-dom';
import useDiscoverMovies from '../../hooks/useDiscoverMovies';
import { Box, Container } from '@mui/material';

import useGenreMovies from '../../hooks/useGenreMovies';
import { useEffect, useState } from 'react';



import style from "./CatalogMovies.module.scss"
import PaginationBlock from '../../UI/PaginationBlock/PaginationBlock';

import useAddToWatch from '../../hooks/useAddToWatch';
import useGetWatchLater from '../../hooks/useGetWatchLater';
import useUser from '../../hooks/Auth/useUser';
import CatalogMoviesContent from '../../components/CatalogMoviesContent/CatalogMoviesContent';


function CatalogMovies() {
  const [currentReviewPage, setCurrentReviewPage] = useState(1);
  const [catalogPage, setCatalogPage] = useState(1);
  const [catalogTitle, setCatalogTitle] = useState('');

  const {genreId} = useParams();
  const {currentUserData} = useUser();

  const {discoverMovie} = useDiscoverMovies(genreId, catalogPage);

  const {genreMoviesListPending, genreMoviesList} = useGenreMovies(genreId);


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
  }, [genreMoviesList, genreId, genreMoviesListPending]);

  const {allWatchLater} = useGetWatchLater();

  const {addWatch} = useAddToWatch();

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
          <CatalogMoviesContent discoverMovie={discoverMovie} allWatchLater={allWatchLater} addToWatchLater={addToWatchLater}/>

          <PaginationBlock result={discoverMovie} total_pages={discoverMovie?.total_pages} currentReviewPage={currentReviewPage} nextReviewPage={nextReviewPage}  />
        </Box>

      </Container>
    </Box>
  );
}

export default CatalogMovies;
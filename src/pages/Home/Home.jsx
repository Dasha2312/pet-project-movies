
import { useUpcomingMovies } from "../../hooks/useUpcomingMovies";
import { usePopularMovies } from "../../hooks/usePopularMovies";
import {useTopRated} from "../../hooks/useTopRated";
import usePopularSeries from "../../hooks/usePopularSeries";
import useTopSeries from "../../hooks/useTopSeries";
import useOnAirSeries from "../../hooks/useOnAirSeries";

import { Box, Container } from "@mui/material";

import SliderMovies from "../../components/SliderMovies/SliderMovies";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import FreeTrial from "../../components/FreeTrial/FreeTrial";

import style from "./Home.module.scss"
import { useEffect, useState } from "react";
import { useContextProvider } from "../../context/useContext";
import useMobileState from "../../hooks/useMobileState";
import Sing_In_Up from "../../components/Sing_In_Up/Sing_In_Up";
import useAddToWatch from "../../hooks/useAddToWatch";
import { useAuth } from "../../store/Auth/useAuth";
import { getAllWatchLater } from "../../services/Movies/apiAddToWatch";

function Home() {
  //Movies
  const {isPending, isError, upcomingMovies, error} = useUpcomingMovies();
  const {isPendingPopular, populatMoviesList, isErrorPopular,  errorPopular} = usePopularMovies();
  const {isPendingTopRated, topRatedMoviesList, isErrorTopRated, errorTopRated} = useTopRated();

  //Series
  const {isPendingPopularSeries, popularSeriesList, isErrorPopularSeries, errorPopularSeries} = usePopularSeries();
  const {isPendingTopSeries, TopSeriesList, isErrorTopSeries, errorTopSeries} = useTopSeries();
  const {isPendingOnAirSeriesList, onAirSeries, isErrorOnAirSeriesList, errorOnAirSeriesList} = useOnAirSeries();

  const isMobile = useMobileState();
  const [activeTab, setActiveTab] = useState('movies');
  const [openLogIn, setOpenLogInModal] = useState(false);

  const {currentUser} = useAuth();

  const {addWatch, addWatchPending} = useAddToWatch();

  function handleTabClick(tab) {
    setActiveTab(tab)
  }

  function openLogInModal() {
    setOpenLogInModal(true)
  }

  function addToWatchLater(newMovieLater) {
    addWatch({...newMovieLater, userId: currentUser.id})
  }

  useEffect(() => {
    getAllWatchLater()
  }, [])

  return (
    <>
      <HomeBanner/>

      {isMobile && 
        <Box className={style.home__tabs}>
          <Container>
            <Box className={style.home__tabsInner}>
              <Box className={`${style.home__tab} ${activeTab === 'movies' ? style.active : ''}`} onClick={() => handleTabClick('movies')}>Movies</Box>
              <Box className={`${style.home__tab} ${activeTab === 'series' ? style.active : ''}`} onClick={() => handleTabClick('series')}>Series</Box>
            </Box>
          </Container>
        </Box>
      }
      
      <Box className={`${style.homeBlock} ${activeTab === 'movies' ? style.active : ''}`}>
        <Container>
          <Box className={style.homeBlock__inner}>
            <Box className={style.homeBlock__header}>
              <Box className={style.homeBlock__title}>Movies</Box>
            </Box>

            <Box className={style.homeBlock__section}>
              <SliderMovies data={upcomingMovies} isPending={isPending} isError={isError} error={error} title="New Releases" type="newReleases" openLogInModal={openLogInModal} addToWatchLater={addToWatchLater} />
            </Box>

            <Box className={style.homeBlock__section}>
              <SliderMovies data={populatMoviesList} isPending={isPendingPopular} isError={isErrorPopular} error={errorPopular} title="Popular Movies" openLogInModal={openLogInModal} addToWatchLater={addToWatchLater} />
            </Box>

            <Box className={style.homeBlock__section}>
              <SliderMovies data={topRatedMoviesList} isPending={isPendingTopRated} isError={isErrorTopRated} error={errorTopRated} title="Top Rated Movies" openLogInModal={openLogInModal} addToWatchLater={addToWatchLater}s />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className={`${style.homeBlock} ${activeTab === 'series' ? style.active : ''}`}>
        <Container>
          <Box className={style.homeBlock__inner}>
            <Box className={style.homeBlock__header}>
                <Box className={style.homeBlock__title}>Series</Box>
            </Box>
            <Box  className={style.homeBlock__section}>
              <SliderMovies data={popularSeriesList} isPending={isPendingPopularSeries} isError={isErrorPopularSeries} error={errorPopularSeries} title="Popular Series" />
            </Box>

            <Box  className={style.homeBlock__section}>
              <SliderMovies data={TopSeriesList} isPending={isPendingTopSeries} isError={isErrorTopSeries} error={errorTopSeries} title="Top Rated Series" />
            </Box>

            <Box  className={style.homeBlock__section}>
              <SliderMovies data={onAirSeries} isPending={isPendingOnAirSeriesList} isError={isErrorOnAirSeriesList} error={errorOnAirSeriesList} title="On The Air in the next 7 days" />
            </Box>
          </Box>
        </Container>
      </Box>

      <Box>
        <FreeTrial />
      </Box>

      <Sing_In_Up openLogIn={openLogIn} setOpenLogInModal={setOpenLogInModal} />
    </>
  );
}

export default Home;

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
import { useState } from "react";
import useMobileState from "../../hooks/useMobileState";
import useAddToWatch from "../../hooks/useAddToWatch";
import useGetWatchLater from "../../hooks/useGetWatchLater";
import useUser from "../../hooks/Auth/useUser";

function Home() {
  //Movies
  const {isPending, isError, upcomingMovies, error} = useUpcomingMovies();
  const {isPendingPopular, populatMoviesList, isErrorPopular,  errorPopular} = usePopularMovies();
  const {isPendingTopRated, topRatedMoviesList, isErrorTopRated, errorTopRated} = useTopRated();

  const {allWatchLater} = useGetWatchLater();

  //Series
  const {isPendingPopularSeries, popularSeriesList, isErrorPopularSeries, errorPopularSeries} = usePopularSeries();
  const {isPendingTopSeries, TopSeriesList, isErrorTopSeries, errorTopSeries} = useTopSeries();
  const {isPendingOnAirSeriesList, onAirSeries, isErrorOnAirSeriesList, errorOnAirSeriesList} = useOnAirSeries();

  const isMobile = useMobileState();
  const [activeTab, setActiveTab] = useState('movies');
  const [openLogIn, setOpenLogInModal] = useState(false);

  const {currentUserData} = useUser();

  const {addWatch} = useAddToWatch();

  function handleTabClick(tab) {
    setActiveTab(tab)
  }

  function openLogInModal() {
    setOpenLogInModal(true)
  }

  function addToWatchLater(newMovieLater) {
    addWatch({...newMovieLater, userId: currentUserData.id})
  }

  // useEffect(() => {
  //   getAllWatchLater()
  // }, [])

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
              <SliderMovies data={upcomingMovies} isPending={isPending} isError={isError} error={error} title="New Releases" type="newReleases" openLogInModal={openLogInModal} addToWatchLater={addToWatchLater} allWatchLater={allWatchLater} />
            </Box>

            <Box className={style.homeBlock__section}>
              <SliderMovies data={populatMoviesList} isPending={isPendingPopular} isError={isErrorPopular} error={errorPopular} title="Popular Movies" openLogInModal={openLogInModal} addToWatchLater={addToWatchLater} />
            </Box>

            <Box className={style.homeBlock__section}>
              <SliderMovies data={topRatedMoviesList} isPending={isPendingTopRated} isError={isErrorTopRated} error={errorTopRated} title="Top Rated Movies" openLogInModal={openLogInModal} addToWatchLater={addToWatchLater} />
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

    </>
  );
}

export default Home;
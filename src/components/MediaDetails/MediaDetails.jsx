import { useParams } from "react-router-dom";
import useMediaDetails from "../../hooks/useMediaDetails";
import MediaDetailsContent from "./MediaDetailsContent";
import { Box, Container } from "@mui/material";
import useTranslations from "../../hooks/useTranslations";
import useCreditsMovies from "../../hooks/useCreditsMovies";
import useRecommendationsMovies from "../../hooks/useRecommendationsMovies";
import SliderMovies from "../SliderMovies/SliderMovies";
import useSimilarMovies from "../../hooks/useSimilarMovies";
import useReviewsMovie from "../../hooks/useReviewsMovie";
import { useState } from "react";

function MediaDetails() {
  const { mediaId } = useParams();
  const [reviewPage, setReviewPage] = useState(1);

  function changeReviewPage(page) {
    setReviewPage(page);
  }

  const { isPendingMediaInfo, mediaInfo, isErrorMediaInfo } = useMediaDetails(mediaId);
  const { pendingTranslationsList, translationsList, errorTranslationsList } = useTranslations(mediaId);
  const { creaditMoviepending, creaditMovie, creaditMovieError } = useCreditsMovies(mediaId);
  const {
    RecommendationsMoviesPending,
    RecommendationsMoviesList,
    RecommendationsMoviesError,
  } = useRecommendationsMovies(mediaId);
  const { SimilarMoviesPending, SimilarMoviesList, SimilarMoviesError } = useSimilarMovies(mediaId);
  const { ReviewsMovieListPending, ReviewsMovieList, ReviewsMovieError } = useReviewsMovie(mediaId, reviewPage);

  return (
    <>
      <MediaDetailsContent
        mediaInfo={mediaInfo}
        translationsList={translationsList}
        creaditMovie={creaditMovie}
        ReviewsMovieList={ReviewsMovieList}
        onSendReviewPage={changeReviewPage}
        isPendingMediaInfo={isPendingMediaInfo}
        pendingTranslationsList={pendingTranslationsList}
        creaditMoviepending={creaditMoviepending}
        ReviewsMovieListPending={ReviewsMovieListPending}
      />

      <Box className="RecommendationsMovies" sx={{ marginTop: "30px" }}>
        <Container>
          <SliderMovies
            data={RecommendationsMoviesList}
            isPending={RecommendationsMoviesPending}
            isError={RecommendationsMoviesError}
            title="Recommendations Movies"
          />
        </Container>
      </Box>

      {SimilarMoviesList?.results?.length > 0 && !SimilarMoviesPending && <Box className="SimilarMovies" sx={{ marginTop: "30px" }}>
        <Container>
          <SliderMovies
            data={SimilarMoviesList}
            isPending={SimilarMoviesPending}
            isError={SimilarMoviesError}
            title="Similar Movies"
          />
        </Container>
      </Box>}
    </>
  );
}

export default MediaDetails;

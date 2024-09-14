import { useQuery } from "@tanstack/react-query";
import { ReviewsMovie } from "../services/Movies/apiReviewsMovie";

function useReviewsMovie(mediaId, reviewPage) {
  const {isPending: ReviewsMovieListPending, data: ReviewsMovieList, isError: ReviewsMovieError} = useQuery({
    queryKey: ['ReviesMovieList', mediaId, reviewPage],
    queryFn: () => ReviewsMovie(mediaId, reviewPage),
    keepPreviousData: true,
    refetchOnWindowFocus: false
  })

  return {ReviewsMovieListPending, ReviewsMovieList, ReviewsMovieError}
}

export default useReviewsMovie;
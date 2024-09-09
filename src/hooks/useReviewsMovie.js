import { useQuery } from "@tanstack/react-query";
import { ReviewsMovie } from "../services/Movies/apiReviewsMovie";

function useReviewsMovie(mediaId) {
  const {isPending: ReviewsMovieListPending, data: ReviewsMovieList, isError: ReviewsMovieError} = useQuery({
    queryKey: ['ReviesMovieList', mediaId],
    queryFn: () => ReviewsMovie(mediaId),
    refetchOnWindowFocus: false
  })

  return {ReviewsMovieListPending, ReviewsMovieList, ReviewsMovieError}
}

export default useReviewsMovie;
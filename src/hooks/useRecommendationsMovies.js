import { useQuery } from "@tanstack/react-query";
import { RecommendationsMovies } from "../services/Movies/apiRecommendationsMovies";

function useRecommendationsMovies(mediaId) {
  const {isPending: RecommendationsMoviesPending, data: RecommendationsMoviesList, isError: RecommendationsMoviesError} = useQuery({
    queryKey: ['RecommendationsMoviesList', mediaId],
    queryFn: () => RecommendationsMovies(mediaId),
    refetchOnWindowFocus: false
  })

  return {RecommendationsMoviesPending, RecommendationsMoviesList, RecommendationsMoviesError}
}

export default useRecommendationsMovies;
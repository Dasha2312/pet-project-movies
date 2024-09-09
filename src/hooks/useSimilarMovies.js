import { useQuery } from "@tanstack/react-query";
import { SimilarMovies } from "../services/Movies/apiSimilarMovies";

function useSimilarMovies(mediaId) {
  const {isPending: SimilarMoviesPending, data: SimilarMoviesList, isError: SimilarMoviesError} = useQuery({
    queryKey: ['similarMoviesList', mediaId],
    queryFn: () => SimilarMovies(mediaId),
    refetchOnWindowFocus: false
  })

  return {SimilarMoviesPending, SimilarMoviesList, SimilarMoviesError}
}

export default useSimilarMovies;
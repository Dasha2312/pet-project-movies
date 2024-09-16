import { useQuery } from "@tanstack/react-query";
import { getGenreMovies } from "../services/Movies/apiGenreMovies";

function useGenreMovies(genreId) {
  const {isPending: genreMoviesListPending, data: genreMoviesList, isError: genreMoviesListError} = useQuery({
    queryKey: ['genreMoviesList'],
    queryFn: () => getGenreMovies(),
    refetchOnWindowFocus: false,
    enabled: !!genreId
  })

  return {genreMoviesListPending, genreMoviesList, genreMoviesListError}
}

export default useGenreMovies;
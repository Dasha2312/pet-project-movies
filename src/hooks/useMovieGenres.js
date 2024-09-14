import { useQuery } from "@tanstack/react-query";
import { getMovieGenres } from "../services/Movies/apiMovieGenres";

function useMovieGenres() {
  const { isPending: isPendingGenresList, data: genresList, isError: isErrorGenresList } = useQuery({
    queryKey: ['genresList'],
    queryFn: () => getMovieGenres()
  })

  return { isPendingGenresList, genresList, isErrorGenresList };
}

export default useMovieGenres;
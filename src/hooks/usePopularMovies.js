import { useQuery } from "@tanstack/react-query"
import apiPopularMovies from "../services/Movies/apiPopularMovies"

export function usePopularMovies() {
  const {isPendins: isPendingPopular, data: populatMoviesList, isError: isErrorPopular, error: errorPopular} = useQuery({
    queryKey: ['populatMoviesList'],
    queryFn: () => apiPopularMovies(),
    refetchOnWindowFocus: false
  })

  return {isPendingPopular, populatMoviesList, isErrorPopular,  errorPopular}
}
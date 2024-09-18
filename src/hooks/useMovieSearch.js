import { useQuery } from "@tanstack/react-query";
import {getMovieSearch} from "../services/Movies/apiMovieSearch"

function useMovieSearch(searchQuery, catalogPage) {
  const {isPending: MovieSearchPending, data: MovieSearchList, isError: MovieSearchError} = useQuery({
    queryKey: ['MovieSearch', searchQuery, catalogPage],
    queryFn: () => getMovieSearch({searchQuery, catalogPage}),
    refetchOnWindowFocus: false,
    enabled: !!searchQuery
  })

  return {MovieSearchPending, MovieSearchList, MovieSearchError}
}

export default useMovieSearch;
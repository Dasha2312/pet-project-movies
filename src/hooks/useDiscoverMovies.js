import { useQuery } from "@tanstack/react-query";
import { getDiscoverMovies } from "../services/Movies/apiDiscoverMovies";

function useDiscoverMovies(genreId, catalogPage) {
  console.log('catalogPage useDiscoverMoviess', catalogPage)
  const {isPending: discoverMoviePending, data: discoverMovie, isError: discoverMovieError} = useQuery({
    queryKey: ['discoverMovie', genreId, catalogPage],
    queryFn: () => getDiscoverMovies({genreId, catalogPage}),
    refetchOnWindowFocus: false
  })

  return {discoverMoviePending, discoverMovie, discoverMovieError}
}

export default useDiscoverMovies;
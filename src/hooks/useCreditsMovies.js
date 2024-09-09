import { useQuery } from "@tanstack/react-query";
import { CreditsMovies } from "../services/Movies/apiCreditsMovies";

function useCreditsMovies(mediaId) {
  const {isPending: creaditMoviepending, data: creaditMovie, isError: creaditMovieError} = useQuery({
    queryKey: ['creaditMovie', mediaId],
    queryFn: () => CreditsMovies(mediaId),
    refetchOnWindowFocus: false
  })

  return {creaditMoviepending, creaditMovie, creaditMovieError}
}

export default useCreditsMovies;
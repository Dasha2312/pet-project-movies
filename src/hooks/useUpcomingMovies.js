import { useQuery } from "@tanstack/react-query";
import UpcomingMovies from "../services/Movies/apiUpcomingMovies";

export function useUpcomingMovies() {
  const {isPending, isError, data: upcomingMovies, error} = useQuery({
    queryKey: ['upcomingMovies'],
    queryFn: () => UpcomingMovies(),
    refetchOnWindowFocus: false
  })

  return {isPending, isError, upcomingMovies, error}
}
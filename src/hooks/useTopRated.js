import { useQuery } from "@tanstack/react-query";
import apiTopRated from "../services/Movies/apiTopRated";

export function useTopRated() {
  const {ispending: isPendingTopRated, data: topRatedMoviesList, isError: isErrorTopRated, error: errorTopRated} = useQuery({
    queryKey: ['topRatedMoviesList'],
    queryFn: () => apiTopRated(),
    refetchOnWindowFocus: false
  })

  return {isPendingTopRated, topRatedMoviesList, isErrorTopRated, errorTopRated}
}

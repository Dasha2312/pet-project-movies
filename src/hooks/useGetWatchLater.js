import { useQuery } from "@tanstack/react-query";
import apiGetWatchLater from "../services/Movies/apiGetWatchLater";

function useGetWatchLater() {
  const {isPending: pendingWatchLater, data: allWatchLeter} = useQuery({
    queryKey: ['getAllMoviesWatchLater'],
    queryFn: () => apiGetWatchLater(),
    refetchOnWindowFocus: false
  })

  return {pendingWatchLater, allWatchLeter}
}

export default useGetWatchLater;
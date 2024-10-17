import { useQuery } from "@tanstack/react-query";
// import apiGetWatchLater from "../services/Movies/apiGetWatchLater";
import { getAllWatchLater } from "../services/Movies/apiAddToWatch";

function useGetWatchLater() {
  const {isPending: pendingWatchLater, data: allWatchLeter} = useQuery({
    queryKey: ['getAllMoviesWatchLater'],
    queryFn: () => getAllWatchLater(),
    refetchOnWindowFocus: true
  })

  return {pendingWatchLater, allWatchLeter}
}

export default useGetWatchLater;
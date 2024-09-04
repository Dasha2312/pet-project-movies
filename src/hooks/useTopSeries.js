import { useQuery } from "@tanstack/react-query";
import { apiTopSeries } from "../services/TvSeries/apiTopSeries";

function useTopSeries() {
  const {isPending: isPendingTopSeries, data: TopSeriesList, isError: isErrorTopSeries, error: errorTopSeries} = useQuery({
    queryKey: ['topSeriesList'],
    queryFn: () => apiTopSeries(),
    refetchOnWindowFocus: false
  })

  return {isPendingTopSeries, TopSeriesList, isErrorTopSeries, errorTopSeries}
}

export default useTopSeries;
import { useQuery } from "@tanstack/react-query";
import { apiPopularSeries } from "../services/TvSeries/apiPopularSeries";

function usePopularSeries() {
  const {isPending: isPendingPopularSeries, data: popularSeriesList, isError: isErrorPopularSeries, error: errorPopularSeries} = useQuery({
    queryKey: ['popularSeriesList'],
    queryFn: () => apiPopularSeries(),
    refetchOnWindowFocus: false
  })

  return {isPendingPopularSeries, popularSeriesList, isErrorPopularSeries, errorPopularSeries}
}

export default usePopularSeries;
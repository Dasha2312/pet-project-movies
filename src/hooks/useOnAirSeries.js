import { useQuery } from "@tanstack/react-query";
import { apiOnAirSeries } from "../services/TvSeries/apiOnAirSeries";

function useOnAirSeries() {
  const {isPending: isPendingOnAirSeriesList, data: onAirSeries, isError: isErrorOnAirSeriesList, error: errorOnAirSeriesList} = useQuery({
    queryKey: ['onAirSeries'],
    queryFn: () => apiOnAirSeries(),
    refetchOnWindowFocus: false
  })

  return {isPendingOnAirSeriesList, onAirSeries, isErrorOnAirSeriesList, errorOnAirSeriesList}
}

export default useOnAirSeries;
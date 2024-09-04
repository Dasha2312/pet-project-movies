import { useQuery } from "@tanstack/react-query";
import { getConfiguration } from "../services/apiConfiguration";

export function useConfiguration() {
  const {isPending: isPendingConfiguration, data: configuration, isError:isErrorConfiguration, error: errorConfiguration} = useQuery({
    queryKey: ['configuration'],
    queryFn: () => getConfiguration(),
    refetchOnWindowFocus: false
  })

  return {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration}
}
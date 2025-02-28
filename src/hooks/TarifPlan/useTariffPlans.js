import { useQuery } from "@tanstack/react-query";
import apiTariffPlans from "../../services/TariffPlan/apiTariffPlans";


function useTariffPlans() {
  const {isPending: allTariffPlansPending, data: allTariffPlans} = useQuery({
    queryKey: ["allTariffPlans"],
    queryFn: () => apiTariffPlans(),
    refetchOnWindowFocus: false
  })

  return {allTariffPlansPending, allTariffPlans}
}

export default useTariffPlans;
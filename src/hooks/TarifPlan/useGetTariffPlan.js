import { useQuery } from "@tanstack/react-query";
import { getTariffPlan } from "../../services/TariffPlan/apiGetTariffPlan";

function useGetTariffPlan(userId) {
  const {isPending: getAllTariffPlansPending, data: getAllTariffPlans} = useQuery({
    queryKey: ["userTariffPlans"],
    queryFn: () => getTariffPlan(userId),
    refetchOnWindowFocus: false

  })

  return {getAllTariffPlansPending, getAllTariffPlans }
}

export default useGetTariffPlan;
import { useQuery } from "@tanstack/react-query";
import { getCurrentTariffPlan, getTariffPlan } from "../../services/TariffPlan/apiGetTariffPlan";

export function useGetTariffPlan(userId) {
  const {isPending: getAllTariffPlansPending, data: getAllTariffPlans} = useQuery({
    queryKey: ["userTariffPlans"],
    queryFn: () => getTariffPlan(userId),
    refetchOnWindowFocus: false,
    enabled: !!userId
  })

  return {getAllTariffPlansPending, getAllTariffPlans  }
}

export function useCurrentTariffPlan(userId) {
  const isEnabled = userId !== undefined && userId !== null;

  const {data: currentTariffPlan, isPending: currentTariffPlanIsPending} = useQuery({
    queryKey: ["currentTariff"],
    queryFn: () => getCurrentTariffPlan(userId),
    refetchOnWindowFocus: false,
    enabled: isEnabled,
    retry: false,
    suspense: false
  })

  return {currentTariffPlan, currentTariffPlanIsPending}
}


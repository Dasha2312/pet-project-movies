import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiChooseTariffPlan } from "../../services/TariffPlan/apiTariffPlan";
import toast from "react-hot-toast";

function useTarifPlan() {
  const queryClient = useQueryClient();

  const {mutate: tarifPlan, isPending: tarifPlanPending} = useMutation({
    mutationFn: apiChooseTariffPlan,
    onSuccess: () => {
      toast.success("Your plan has been changed")
      queryClient.invalidateQueries(["tariffPlanNumber"])
    },
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })

  return {tarifPlan, tarifPlanPending}
} 

export default useTarifPlan;
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiChooseTariffPlan } from "../../services/TariffPlan/apiTariffPlan";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setSelectedTariff } from "../../store/tariffSlice";

function useTarifPlan() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const {mutate: tarifPlan, isPending: tarifPlanPending} = useMutation({
    mutationFn: apiChooseTariffPlan,
    onSuccess: (data) => {
      console.log('data', data);
      const selectedPlan = data[0];
      toast.success("Your plan has been changed")
      queryClient.invalidateQueries(["tariffPlanNumber"])
      dispatch(
        setSelectedTariff({
          tariffPlanId: selectedPlan.tariffPlanId,
          tariffPlanTitle: selectedPlan.tariffPlanTitle,
          tariffPlanPrice: selectedPlan.tariffPlanPrice,
          tariffPlanType: selectedPlan.tariffPlanType,
          tariffPlanMethod: selectedPlan.tariffPlanMethod
        })
      );
    },
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })

  return {tarifPlan, tarifPlanPending}
} 

export default useTarifPlan;
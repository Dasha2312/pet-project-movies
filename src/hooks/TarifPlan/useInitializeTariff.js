import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getTariffPlan } from "../../services/TariffPlan/apiGetTariffPlan";
import { setSelectedTariff } from "../../store/tariffSlice";

function useInitializeTariff(userId) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!userId) return; // Ожидаем, пока userId станет доступным

    async function loadTariff() {
      try {
        const tariff = await getTariffPlan(userId);
        if (tariff) {
          dispatch(setSelectedTariff(tariff));
        }
      } catch (error) {
        console.error('Error loading tariff:', error.message);
      }
    }

    loadTariff();
  }, [dispatch, userId]);
}

export default useInitializeTariff;
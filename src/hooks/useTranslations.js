import { useQuery } from "@tanstack/react-query";
import { Translations } from "../services/apiTranslations";

function useTranslations(movieId) {
  const {isPending: pendingTranslationsList, data: translationsList, isError: errorTranslationsList} = useQuery({
    queryKey: ['translationsList', movieId],
    queryFn: () => Translations(movieId),
    refetchOnWindowFocus: false
  })

  return {pendingTranslationsList, translationsList, errorTranslationsList}
}

export default useTranslations;
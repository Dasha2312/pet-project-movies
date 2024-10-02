import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAddToWatch from "../services/Movies/apiAddToWatch";
import { toast } from "react-hot-toast";

function useAddToWatch() {
  const queryClient = useQueryClient();
  const {mutate: addWatch, isPending} = useMutation({
    mutationFn: apiAddToWatch,
    onSuccess: () => {
      toast.success('You add movie to list Watch Later');
      queryClient.invalidateQueries(["watchLater"])
    },
     onError: (error) => {
      toast.error(`${error.message}`)
     }
  })

  return {addWatch, isPending}
}

export default useAddToWatch;
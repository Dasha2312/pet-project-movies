import { useMutation, useQueryClient } from "@tanstack/react-query";
import apiAddToWatch from "../services/Movies/apiAddToWatch";
import { toast } from "react-hot-toast";

function useAddToWatch() {
  const queryClient = useQueryClient();
  const {mutate: addWatch, isPending} = useMutation({
    mutationFn: apiAddToWatch,
    onSuccess: (response) => {
      // toast.success('You add movie to list Watch Later');
      if (response.deleted) {
        toast.success('This movie had been deleted from your Watch Later list');
      } else {
        toast.success('You have just added a movie to your Watch Later list');
      }
      queryClient.invalidateQueries(["watchLater"])
    },
     onError: (error) => {
      toast.error(`${error.message}`)
     }
  })

  return {addWatch, isPending}
}

export default useAddToWatch;
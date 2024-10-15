import { useMutation, useQueryClient } from "@tanstack/react-query";
import {removeWatchLater} from "../services/Movies/apiAddToWatch"
import toast from "react-hot-toast";


function useRemoveWatchLater() {
  const queryClient = useQueryClient();
  const {mutate: removeWatchLater, isPending: removeWatchLaterPending} = useMutation({
    mutationFn: removeWatchLater,
    onSettled: () => {
      toast.success('This movie had been deleted from your Watch Later list');
      queryClient.invalidateQueries(["watchLater"])
    },
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })
}

export default useRemoveWatchLater;
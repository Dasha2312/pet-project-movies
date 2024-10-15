import { useMutation, useQueryClient } from "@tanstack/react-query";
import {apiDeleteWatchLater} from "../services/Movies/apiAddToWatch"
import toast from "react-hot-toast";


function useRemoveWatchLater() {
  const queryClient = useQueryClient();
  const {mutate: removeWatchLater, isPending: removeWatchLaterPending} = useMutation({
    mutationFn: apiDeleteWatchLater,
    onSettled: () => {
      toast.success('This movie had been deleted from your Watch Later list.', {
        style: {
          border: '1px solid ##ffe69c',
          background: '#fff3cd',
          padding: '16px',
          color: '#664d03',
        },
        iconTheme: {
          primary: '#664d03',
          secondary: '#fff',
        },
      });
      queryClient.invalidateQueries(["watchLater"])
    },
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })

  return {removeWatchLater, removeWatchLaterPending}
}

export default useRemoveWatchLater;
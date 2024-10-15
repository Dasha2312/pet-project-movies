import { useMutation, useQueryClient } from "@tanstack/react-query";
import {apiAddToWatch} from "../services/Movies/apiAddToWatch";
import { toast } from "react-hot-toast";

function useAddToWatch() {
  const queryClient = useQueryClient();
  const {mutate: addWatch, isPending: addWatchPending} = useMutation({
    mutationFn: apiAddToWatch,
    onSuccess: (response) => {
      // toast.success('You add movie to list Watch Later');
      if (response.deleted) {
        // toast.success('This movie had been deleted from your Watch Later list');
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
      } else {
        toast.success('You have just added a movie to your Watch Later list');
      }
      queryClient.invalidateQueries(["watchLater"])
    },
    onError: (error) => {
      toast.error(`${error.message}`)
    }
  })

  return {addWatch, addWatchPending}
}

export default useAddToWatch;
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { apiUpdateUser } from "../../services/Auth/apiAuth";

export function useUpdateUser() {
  const {mutate: updateUser, isPending: isPendingUpdateUser} = useMutation({
    mutationFn: apiUpdateUser,
    onSuccess: async (user) => {
      toast.success(
        `Your info was update successfully!`
      );
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    }
  })

  return {updateUser, isPendingUpdateUser}
}
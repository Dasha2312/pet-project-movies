import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logIn } from "../../services/Auth/apiAuth";
import { toast } from "react-hot-toast";

export function useLogIn() {
  const queryClient = useQueryClient();
  const {mutate: login, isPending} = useMutation({
    mutationFn: logIn,
    onSuccess: async (user) => {
      // console.log('user', user)
      queryClient.setQueryData(['user'], user.user);
      toast.success(
        `You log in successfully!`
      );
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    }
  })

  return {login, isPending}
}
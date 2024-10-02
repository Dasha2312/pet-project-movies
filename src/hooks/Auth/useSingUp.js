import { useMutation } from "@tanstack/react-query";
import { singUpAPI } from "../../services/Auth/apiAuth";
import { toast } from "react-hot-toast";

export function useSingUp() {
  const {mutate: singup, isPending} = useMutation({
    mutationFn: singUpAPI,
    onSuccess: (user) => {
      toast.success(
        `Account has been successfully created!\n\n Please verify the new account from the user's email address.`
      );
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    }
  })

  return {singup, isPending}
}
import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../services/Auth/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogIn() {
  const navigate = useNavigate();
  const {mutate: login, isPending} = useMutation({
    mutationFn: logIn,
    onSuccess: (user) => {
      toast.success(
        `You log in successfully!`
      );
      setTimeout(() => {
        navigate(0)
      }, 6500)
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    }
  })

  return {login, isPending}
}
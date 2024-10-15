import { useMutation } from "@tanstack/react-query";
import { logIn } from "../../services/Auth/apiAuth";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../store/Auth/useAuth";

export function useLogIn() {
  const { fetchUser } = useAuth(); 
  const {mutate: login, isPending} = useMutation({
    mutationFn: logIn,
    onSuccess: async (user) => {
      toast.success(
        `You log in successfully!`
      );
      await fetchUser();
    },
    onError: (error) => {
      toast.error(`${error.message}`);
    }
  })

  return {login, isPending}
}
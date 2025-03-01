import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../../services/Auth/apiAuth";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import toast from "react-hot-toast";


function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();

  const {mutate: logout, isPending: isPengindLogOut} = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      toast.success("You log out successfully!")

      queryClient.setQueryData(["user"], null);
      queryClient.removeQueries({ queryKey: ['userTariffPlans']}, null);
      queryClient.removeQueries({ queryKey: ['currentTariff']});

      if (matchPath("/account/*", location.pathname)) {
        navigate('/home', {replace: true})
      }
    }
  })  

  return {logout, isPengindLogOut}
}

export default useLogOut;
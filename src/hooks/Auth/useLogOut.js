import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../../services/Auth/apiAuth";
import { useLocation, useNavigate, matchPath } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { resetTariff } from "../../store/tariffSlice";

function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const {mutate: logout, isPending: isPengindLogOut} = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      toast.success("You log out successfully!")

      queryClient.removeQueries({ queryKey: ['user']});
      queryClient.removeQueries({ queryKey: ['userTariffPlans']});

      dispatch(resetTariff())

      if (matchPath("/account/*", location.pathname)) {
        navigate('/home', {replace: true})
      }
    }
  })  

  return {logout, isPengindLogOut}
}

export default useLogOut;
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOut } from "../../services/Auth/apiAuth";
import { useNavigate } from "react-router-dom";

function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const {mutate: logout, isPending: isPengindLogOut} = useMutation({
    mutationFn: logOut,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate(0, {replace: true})
    }
  })  

  return {logout, isPengindLogOut}
}

export default useLogOut;
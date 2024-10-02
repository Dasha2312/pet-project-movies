import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/Auth/apiAuth";

function useUser() {
  const queryClient = useQueryClient();

  const {isPending: currentUserPending, data: currentUser} = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(),
    staleTime: 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000, 
    refetchOnWindowFocus: false
  })

  const isAuthenticated = currentUser !== null;

  return {currentUserPending, currentUser, isAuthenticated}
}

export default useUser;
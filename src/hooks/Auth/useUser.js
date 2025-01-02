import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/Auth/apiAuth";

function useUser() {
  const {isPending: currentUserPending, data: currentUserData} = useQuery({
    queryKey: ["user"],
    queryFn: () => getCurrentUser(),
    staleTime: 60 * 60 * 1000,
    cacheTime: 24 * 60 * 60 * 1000, 
    refetchOnWindowFocus: false,
    retry: false,
  })

  const isAuthenticated = !!currentUserData;

  return {currentUserPending, currentUserData, isAuthenticated}
}

export default useUser;
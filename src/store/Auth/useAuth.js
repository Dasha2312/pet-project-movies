import { useDispatch, useSelector } from "react-redux";
import { useError, userLoaded, userLoading } from "./authSlice";
import { getCurrentUser } from "../../services/Auth/apiAuth";

export function useAuth() {
  const dispatch = useDispatch()

  const {currentUser, isAuthenticated, loading} = useSelector(state => state.auth);

  async function fetchUser() {
    try {
      dispatch(userLoading());
      const user = await getCurrentUser();

      if(user) {
        dispatch(userLoaded(user))
      } else {
        dispatch(useError('User not found'))
      }
    } catch (error) {
      dispatch(useError(error.message))
    }
  }

  return {currentUser, isAuthenticated, loading, fetchUser}
}
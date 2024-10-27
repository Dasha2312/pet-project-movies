import { useDispatch, useSelector } from "react-redux";
import { useError, userLoaded, userLoading } from "./authSlice";
import { getCurrentUser } from "../../services/Auth/apiAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function useAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  console.log('isAuthenticated', isAuthenticated)
  console.log('currentUser', currentUser)

  // useEffect(() => {
  //   if(!isAuthenticated) {
  //     navigate('/',  {replace: true})
  //   }
  // }, [isAuthenticated, navigate])

  // useEffect(() => {
  //   if (!isAuthenticated && currentUser === null) {
  //     navigate('/home' ,  {replace: true}); // Перенаправление на главную
  //   }
  // }, [isAuthenticated, currentUser, navigate]);

  return {currentUser, isAuthenticated, loading, fetchUser}
}
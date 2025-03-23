import { useQuery } from "@tanstack/react-query";
// import apiGetWatchLater from "../services/Movies/apiGetWatchLater";
import { getAllWatchLater } from "../services/Movies/apiAddToWatch";
import { useDispatch } from "react-redux";
import { setWatchLaterList } from "../store/watchLaterSlice";
import { useEffect } from "react";
import useUser from "./Auth/useUser";

function useGetWatchLater() {
  const dispatch = useDispatch();
  const {currentUserData} = useUser();
  console.log('currentUserData')

  const {isPending: pendingWatchLater, data: allWatchLater} = useQuery({
    queryKey: ['getAllMoviesWatchLater'],
    queryFn: () => getAllWatchLater(),
    enabled: !!currentUserData,
    refetchOnWindowFocus: true
  })

  useEffect(() => {
    if(allWatchLater) {
      dispatch(setWatchLaterList(allWatchLater))
    }
  }, [allWatchLater, dispatch])

  return {pendingWatchLater, allWatchLater}
}

export default useGetWatchLater;
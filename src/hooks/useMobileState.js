import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { mobileState } from "../store/mobileSlice";

function useMobileState() {
  const dispatch = useDispatch();
  const isMobile = useSelector(state => state.mobile.isMobile)

  useEffect(() => {
    function handleResize() {
      dispatch(mobileState())
    }

    handleResize();

    window.addEventListener('resize', handleResize)

    return() => {
      window.removeEventListener('resize', handleResize)
    }

  }, [dispatch])

  return isMobile;
}

export default useMobileState;
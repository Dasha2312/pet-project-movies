import { useState } from "react";
import LogIn from "../LogIn/LogIn";
import SingUpForm from "../SingUpForm/SingUpForm";
import { useDispatch, useSelector } from "react-redux";
import { openAuthModal } from "../../store/authModalSlice";


function Sing_In_Up() {
  const isLoginOpen = useSelector(state => state.authModal.isOpen);
  const dispatch = useDispatch();

  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  function handleOpenSignUp() {
    setIsSignUpOpen(true);
  }

  function handleCloseSignUp() {
    setIsSignUpOpen(false);
  }

  function handleCloseModal() {
    dispatch(openAuthModal());
    setIsSignUpOpen(false);
  }

  return (
    <>
      {isLoginOpen && !isSignUpOpen && (
        <LogIn
          setOpenModalSingUp={handleOpenSignUp}
        />
      )}
      {isSignUpOpen && (
        <SingUpForm
          isSignUpOpen={isSignUpOpen}
          closeSingUpModal={handleCloseSignUp}
          handleCloseModal={handleCloseModal}
        />
      )}
    </>
  );
}

export default Sing_In_Up;
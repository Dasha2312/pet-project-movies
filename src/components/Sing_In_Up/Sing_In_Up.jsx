import { useState } from "react";
import LogIn from "../LogIn/LogIn";
import SingUpForm from "../SingUpForm/SingUpForm";


function Sing_In_Up({openLogIn, setOpenLogInModal}) {
  const [openModalSingUp, setOpenModalSingUp] = useState(false)

  function handleCloseModal() {
    setOpenLogInModal(false)
  }

  function closeSingUpModal() {
    setOpenModalSingUp(false)
  }
  return (
    <>
      {openLogIn &&  <LogIn openLogIn={openLogIn} handleCloseModal={handleCloseModal} setOpenModalSingUp={setOpenModalSingUp} setOpenLogInModal={setOpenLogInModal} />}
      {openModalSingUp && <SingUpForm openModalSingUp={openModalSingUp} closeSingUpModal={closeSingUpModal} setOpenLogInModal={setOpenLogInModal} setOpenModalSingUp={setOpenModalSingUp} />}
    </>
  );
}

export default Sing_In_Up;
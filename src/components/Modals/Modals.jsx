import LogIn from "../LogIn/LogIn";
import SingUpForm from "../SingUpForm/SingUpForm";
import { useSelector } from "react-redux";
import ModalBlock from "../../UI/ModalBlock/ModalBlock";


function Modals() {
  const modalType = useSelector(state => state.authModal.modalType)
  const isModalOpen = useSelector(state => state.authModal.isOpen)

  return (
    <ModalBlock isOpen={isModalOpen}>
      {modalType == 'LogIn' &&  <LogIn />}
      {modalType == 'SignUp' && <SingUpForm />}
    </ModalBlock>
  );
}

export default Modals;
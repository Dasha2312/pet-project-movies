import { Box, Modal } from "@mui/material";
import { useDispatch } from "react-redux";
import { closeAuthModal } from "../../store/authModalSlice";

function ModalBlock({children, isOpen}) {
  const dispatch = useDispatch();
  return (
    <Modal
      open={isOpen}
      onClose={() => dispatch(closeAuthModal())}
      sx={{
        ".MuiBackdrop-root": {
          backgroundColor: "rgba(0, 0, 0, 0.85)",
        },
      }}
    >
      <Box className="modal-block" sx={{width: "90%", maxWidth: "530px", minWidth: "auto", maxHeight: "90vh", overflowY: "auto", padding: {xs: "20px", md: "40px"}}}>
        {children}
      </Box>
    </Modal>
  );
}

export default ModalBlock;
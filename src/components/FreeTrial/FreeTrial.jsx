import { Box, Container } from "@mui/material";
import { Link } from "react-router-dom";

import style from "./FreeTrial.module.scss"

function FreeTrial() {
  return (
    <Box className={style.freeTrial}>
      <Container>
        <Box className={style.freeTrial__inner}>
          <Box className={style.freeTrial__content}>
            <Box className={style.freeTrial__text}>
              <Box className={style.freeTrial__title}>Start your free trial today!</Box>
              <Box className={style.freeTrial__subtitle} sx={{color: "#999"}}>This is a clear and concise call to action that encourages users to sign up for a free trial of StreamVibe.</Box>
            </Box>
            <Box className={style.freeTrial__footer}>
              <Link to="/free-trial" type="link" className="btnRed btnLink">Start a Free Trail</Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default FreeTrial;
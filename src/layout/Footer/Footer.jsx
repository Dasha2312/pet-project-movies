import { Box, Container } from "@mui/material";
import Grid from '@mui/material/Grid2';
import { Link } from "react-router-dom";

import style from "./Footer.module.scss"

function Footer() {
  return (
    <Box className={style.footer}>
      <Container>
        <Grid container spacing={2}>
          <Grid size={{ xs: 6, sm: 4, md: 4, xl:2, lg: 2 }}>
           <Box className={style.footer__title}>Home</Box>
           <Box>
            <Box>
              <Link to="#" className={style.footer__link}>Categories</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Devices</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Pricing</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>FAQ</Link>
            </Box>
           </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4, xl:2, lg: 2 }}>
           <Box className={style.footer__title}>Movies</Box>
           <Box>
            <Box>
              <Link to="#" className={style.footer__link}>Gernes</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Trending</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>New Release</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Popular</Link>
            </Box>
           </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4, xl:2, lg: 2 }}>
           <Box className={style.footer__title}>Series</Box>
           <Box>
            <Box>
              <Link to="#" className={style.footer__link}>On The Air</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Top Rated</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Popular</Link>
            </Box>
           </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4, xl:2, lg: 2 }}>
           <Box className={style.footer__title}>Support</Box>
           <Box>
            <Box>
              <Link to="#" className={style.footer__link}>Contact Us</Link>
            </Box>
           </Box>
          </Grid>

          <Grid size={{ xs: 6, sm: 4, md: 4, xl:2, lg: 2 }}>
           <Box className={style.footer__title}>Subscription</Box>
           <Box>
            <Box>
              <Link to="#" className={style.footer__link}>Plans</Link>
            </Box>
            <Box>
              <Link to="#" className={style.footer__link}>Features</Link>
            </Box>
           </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 4, md: 4, xl:2, lg: 2 }}>
           <Box className={style.footer__title}>Connect With Us</Box>
           <Box sx={{display: 'flex'}} className="socialLinks">
            <Box className="socialLink__block">
              <Link to="#" className="socialLink__link">
                <svg  viewBox="0 0 24 24" width="24">
                  <use href="./img/icon/facebook.svg#facebook" />
                </svg>
              </Link>
            </Box>
            <Box className="socialLink__block">
              <Link to="#" className="socialLink__link">
                <svg  viewBox="0 0 24 24" width="24">
                  <use href="./img/icon/twitter.svg#twitter" />
                </svg>
              </Link>
            </Box>
            <Box className="socialLink__block">
              <Link to="#" className="socialLink__link">
                <svg  viewBox="0 0 24 24" width="24">
                  <use href="./img/icon/in.svg#in" />
                </svg>
              </Link>
            </Box>
           </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
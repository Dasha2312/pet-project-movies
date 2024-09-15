import { Box, Container } from "@mui/material";
import style from "./HomeBanner.module.scss"
import { useEffect, useState } from "react";
import { useContextProvider } from "../../context/useContext";

function HomeBanner() {
  const isMobile = useContextProvider();

  return (
    <Box className={style.banner}>
      <Box className={style.bannerBg}>
        <Container>
          <Box className={style.bannerIcon}></Box>
          <Box className={style.bannerContent}>
            <Box component="h1" className={style.banner__title}>The Best Streaming Experience</Box>
            {
              !isMobile ? (
                <Box sx={{textAlign: 'center', color: '#999'}}>
                  StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With StreamVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
                </Box>
              ) : (
                <Box sx={{textAlign: 'center', color: '#999'}}>
                  StreamVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere.
                </Box>
              )
            }
            
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default HomeBanner;
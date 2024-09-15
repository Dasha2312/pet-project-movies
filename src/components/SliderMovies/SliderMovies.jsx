import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, duration } from "@mui/material";
import SlideItem from "./SlideItem";
import { useConfiguration } from "../../hooks/useConfiguration";
// import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import style from "./Slider.module.scss"
import { useRef, useState } from "react";

function SliderMovies({isPending, isError, data, error, classBlock, title, type}) {

  const {isPendingConfiguration, configuration, isErrorConfiguration, errorConfiguration} = useConfiguration();
  const imagesBaseUrl = configuration?.imagesBaseUrl;
  const imagePosterSizes = configuration?.imagePosterSizes[5];
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  function CustomPrevArrow({ className, onClick }) {
    return (
      <div className={style.customPrevArrow} onClick={onClick}>
        <ArrowBackIcon />
      </div>
    );
  };

  function CustomNextArrow({ className, onClick }) {
    return (
      <div className={style.customNextArrow} onClick={onClick}>
        <ArrowForwardIcon />
      </div>
    );
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex / settings.slidesToScroll),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          variableWidth: true,
        }
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
        }
      }
    ]
  };

  const totalSlides = data?.results.length || 0;
  const totalDots = Math.ceil(totalSlides / settings.slidesToScroll);

  if(isError) {
    return (
      <div>
        Error {error}
      </div>
    )
  }

  return (
    <Box className="slider-block">

        <Box className={style.sliderBlock__header}>
          <Box component="h5" className={style.sliderBlock__title}>{title}</Box>
          <Box className={style.sliderBlock__navigation}>
            <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
            <Box className={style.customDots}>
              {[...Array(totalDots)].map((_, index) => (
                <span
                  key={index}
                  className={`${style.sliderBlock__dot} ${index === currentSlide ? style.sliderBlock__dotActive : ""}`}
                  onClick={() => sliderRef.current.slickGoTo(index * slidesToScroll)}
                >
                </span>
              ))}
            </Box>
            <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
          </Box>
        </Box>
        {isPending ? (
          <div>Loading...</div>
          ) : (
            <Box className={`${classBlock ? classBlock : ''} ${style.sliderContainer} slider-container`}>
              <Slider ref={sliderRef} {...settings}>
                {data?.results.map(slide => <SlideItem key={slide.id} slide={slide} imagesBaseUrl={imagesBaseUrl} imagePosterSizes={imagePosterSizes} type={type} />)}
              </Slider>
            </Box>
          )
        }

    </Box>
        
  );
}

export default SliderMovies;
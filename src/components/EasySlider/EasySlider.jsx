import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import style from "./EasySLider.module.scss";

import { useRef, useState } from "react";
import { Box } from "@mui/material";

function EasySlider({ data, imageSecureBaseUrl, imageProfileSizes, title }) {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  function CustomPrevArrow({ className, onClick }) {
    return (
      <div className={style.customPrevArrow} onClick={onClick}>
        <ArrowBackIcon />
      </div>
    );
  }

  function CustomNextArrow({ className, onClick }) {
    return (
      <div className={style.customNextArrow} onClick={onClick}>
        <ArrowForwardIcon />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    variableWidth: true,
    beforeChange: (oldIndex, newIndex) =>
      setCurrentSlide(newIndex / settings.slidesToScroll),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
          variableWidth: true,
        },
      },
      {
        breakpoint: 678,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <Box className="slider-block">
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px'}}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "500",
            color: "#999;",
          }}
        >
          {title}
        </Box>
        <Box sx={{display: 'flex', alignItems: 'center'}} className={style.slider__navigation}>
          <CustomPrevArrow onClick={() => sliderRef.current.slickPrev()} />
          <CustomNextArrow onClick={() => sliderRef.current.slickNext()} />
        </Box>
      </Box>

      <Box className={`easySlider slider-container`}>
        <Slider ref={sliderRef} {...settings}>
          {data.map((slide) => (
            <Box key={slide.id} className={style.slide}>
              <Box key={slide.id} className={style.slide__inner}>
                <Box className={style.slide__img}>
                  {slide.profile_path ? (
                    <img
                      src={`${imageSecureBaseUrl}${imageProfileSizes}${slide.profile_path}`}
                      alt=""
                    />
                  ) : (
                    <img src="/img/icon/actor.svg" alt="" className={style.slide__imgEmpty} />
                  )}
                </Box>
                <Box className={style.slide__info}>
                  <Box className={style.slide__title}>{slide.original_name}</Box>
                  <Box className={style.slide__subtitle}>{slide.character}</Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

export default EasySlider;
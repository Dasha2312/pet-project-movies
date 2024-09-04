import { Box } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import style from "./Slider.module.scss"
import { changeDate } from "../../helper/helper";
import { Link } from "react-router-dom";

function SlideItem({slide, imagePosterSizes, imagesBaseUrl, type}) {
  const newFormatDate = changeDate(slide.release_date);
  return (
    <Box className={style.sliderItem}>
      <Link to={`/${slide.id}`} className={style.sliderItem__inner}>
        <Box className={style.sliderItem__imgBlock}>
          <img src={`${imagesBaseUrl}${imagePosterSizes}${slide.poster_path}`} className={style.sliderItem__img} />
        </Box>
        <Box className={style.sliderItem__content}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className={style.sliderItem__info}>
            <Box className={style.sliderItem__title}>{slide.original_title ? slide.original_title : slide.original_name}</Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <StarIcon sx={{marginRight: '5px', color: '#efbf04', fontSize: '14px'}} /> {slide.vote_average.toFixed(1)}
            </Box>
          </Box>
          {type === 'newReleases' && (
            <Box sx={{display: 'flex', justifyContent: 'center'}} className={style.sliderItem__release}>
              <Box sx={{marginRight: '5px'}}>Released at</Box>
              <Box sx={{fontWeight: '500', color: '#fff'}}>{newFormatDate}</Box>
            </Box>
          )}
          
        </Box>
      </Link>
    </Box>
  );
}

export default SlideItem;
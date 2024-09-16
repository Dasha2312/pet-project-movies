import React from 'react';
import style from "./MediaBlock.module.scss"
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { changeDate } from '../../helper/helper';
import StarIcon from '@mui/icons-material/Star';

function MediaBlock({media, imagePosterSizes, imagesBaseUrl, type}) {
  const newFormatDate = changeDate(media.release_date);
  return (
    <Box className={style.mediaItem}>
      <Link to={`/media/${media.id}`} className={style.mediaItem__inner}>
        <Box className={style.mediaItem__imgBlock}>
          <img src={`${imagesBaseUrl}${imagePosterSizes}${media.poster_path}`} className={style.mediaItem__img} />
        </Box>
        <Box className={style.mediaItem__content}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className={style.mediaItem__info}>
            <Box className={style.mediaItem__title}>{media.original_title ? media.original_title : media.original_name}</Box>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
              <StarIcon sx={{marginRight: '5px', color: '#efbf04', fontSize: '14px'}} /> {media.vote_average.toFixed(1)}
            </Box>
          </Box>
          {type === 'newReleases' && (
            <Box sx={{display: 'flex', justifyContent: 'center'}} className={style.mediaItem__release}>
              <Box sx={{marginRight: '5px'}}>Released at</Box>
              <Box sx={{fontWeight: '500', color: '#fff'}}>{newFormatDate}</Box>
            </Box>
          )}
          
        </Box>
      </Link>
    </Box>
  );
}

export default MediaBlock;
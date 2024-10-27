import { useEffect, useState } from 'react';
import style from "./MediaBlock.module.scss"
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { changeDate } from '../../helper/helper';
import StarIcon from '@mui/icons-material/Star';

import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../store/Auth/useAuth';
import { useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter } from '../../store/watchLaterSlice';


function MediaBlock({media, imagePosterSizes, imagesBaseUrl, type, openLogInModal, addToWatchLater, isAddedToWatchLater}) {
  const newFormatDate = changeDate(media.release_date);

  const {isAuthenticated, loading} = useAuth();

  const [isAdded, setIsAdded] = useState(isAddedToWatchLater);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isAddedToWatchLater !== undefined) {
      setIsAdded(isAddedToWatchLater);
    }
  }, [isAddedToWatchLater]);

  function handleBookmarkClick(media) {
    const newMovieLater = {
      movieId: media.id,
      movieName: media.original_title ?? media.original_name,
      movieRating: media.vote_average,
      movieImg: media.poster_path,
      movieReleasedDate: media.release_date ?? ''
    }
    if (loading) {
      return;
    }

    if(isAuthenticated) {
      try {
        
        addToWatchLater(newMovieLater);
        setIsAdded(prev => {
          if(prev) {
            dispatch(decrementCounter())
          } else {
            dispatch(incrementCounter())
          }
        })
      } catch (error) {
        toast.error(error.message)
      }
    } else {
      openLogInModal()
    }
  }

  return (
    <Box className={style.mediaItem}>
      <Box className={`${style.mediaItem__bookmarkBlock} ${isAdded ? style.mediaItem__bookmarkBlockActive : ''}`} onClick={() => handleBookmarkClick(media)}>
        <BookmarkBorderIcon sx={{ fontSize: 25 }} className={`${style.mediaItem__bookmarkIcon}`} />
      </Box>
      <Link to={`/media/${media.id}`} className={style.mediaItem__inner}>
        <Box className={style.mediaItem__imgBlock} sx={{marginBottom: '15px', flex: '1'}}>
          {media.poster_path == null ? (
            <img src="/img/default-movie.jpg" className={style.mediaItem__img} />
            ) : (
              <img src={`${imagesBaseUrl}${imagePosterSizes}${media.poster_path}`} className={style.mediaItem__img} />
            )
          }
          
        </Box>
        <Box className={style.mediaItem__content}>
          <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}} className={style.mediaItem__info}>
            <Box className={style.mediaItem__title}>{media.original_title || media.original_name}</Box>
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
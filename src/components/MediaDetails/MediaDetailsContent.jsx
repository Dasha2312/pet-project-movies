import { Box, Button, Container, Pagination, Rating, Stack } from "@mui/material";
import Grid from "@mui/material/Grid2";

import style from "./MediaDetails.module.scss";
import { useConfiguration } from "../../hooks/useConfiguration";
import StarIcon from "@mui/icons-material/Star";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import EasySlider from "../EasySlider/EasySLider";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ReviewBlock from "../ReviewBlock/ReviewBlock";
import { useState } from "react";
import { Link } from "react-router-dom";

function MediaDetailsContent({
  mediaInfo,
  translationsList,
  creaditMovie,
  ReviewsMovieList,
  onSendReviewPage,
  isPendingMediaInfo,
  pendingTranslationsList,
  creaditMoviepending,
  ReviewsMovieListPending
}) {

  const {
    isPendingConfiguration,
    configuration,
    isErrorConfiguration,
    errorConfiguration,
  } = useConfiguration();


  const newTranslationsList = translationsList?.translations.map(item => {return{...item, id: crypto.randomUUID()}})

  const imageSecureBaseUrl = configuration?.imageSecureBaseUrl;
  const imageBackdropSizes = configuration?.imageBackdropSizes.at(-2);
  const imageProfileSizes = configuration?.configurationOptions.images.profile_sizes.at(1);

  const [currentReviewPage, setCurrentReviewPage] = useState(1);

  function nextReviewPage(event, value) {
    setCurrentReviewPage(value)
    onSendReviewPage(value);
  }


  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box className={style.mediaHeader}>
        <Container>
          {!isPendingMediaInfo &&  <Box className={style.mediaHeader__inner} sx={{position: 'relative'}}>
              <img
                src={`${imageSecureBaseUrl}${imageBackdropSizes}${mediaInfo.backdrop_path}`}
                className={style.mediaHeader__img}
              />
              <Box className={style.mediaHeader__info} sx={{textAlign: 'center'}}>
                <Box component="h1" className={style.mediaHeader__title}>
                  {mediaInfo.original_title}
                </Box>
                <Box className={style.mediaHeader__subtitle}>
                  {mediaInfo.tagline}
                </Box>
                <Box className={style.mediaHeader__actions}>
                  <button type="button" className={`${style.mediaHeader__playBtn} btnRed`}>
                    <i className={style.mediaHeader__playIcon}>
                      <svg width="19" viewBox="0 0 19 20">
                        <use href="/img/icon/play-btn.svg#play-btn" />
                      </svg>
                    </i>
                    Play Now
                  </button>

                  <Box className={style.mediaHeader__actionsSmall} sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                    <button type="button" className={`${style.mediaHeader__action} ${style.mediaHeader__addBookmark}`}>
                      <BookmarkBorderIcon sx={{ fontSize: 29 }} className={`${style.mediaHeader__bookmarkIcon}`} />
                    </button>

                    <button type="button" className={style.mediaHeader__action}>
                      <i className={`${style.mediaHeader__likeIcon}`}>
                        <svg width="29" viewBox="0 0 29 28">
                          <use href="/img/icon/like.svg#like" />
                        </svg>
                      </i>
                    </button>
                  </Box>
                </Box>
              </Box>
            </Box>
          }
        </Container>
      </Box>

      <Box className={style.media__content}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={8}>
              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  <Box
                    className={style.mediaHeader__sectionTitle}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      fontWeight: "500",
                      color: "#999;",
                    }}
                  >
                    Description
                  </Box>
                  {!isPendingMediaInfo &&
                    <Box className={style.mediaHeader__sectionText}>
                      {mediaInfo.overview}
                    </Box>
                  }
                </Box>
              </Box>

              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  {!creaditMoviepending && <EasySlider
                    data={creaditMovie.cast}
                    imageSecureBaseUrl={imageSecureBaseUrl}
                    imageProfileSizes={imageProfileSizes}
                    title="Cast"
                  />}
                </Box>
              </Box>

              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  <Box
                    className={style.mediaHeader__sectionTitle}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "15px",
                      fontWeight: "500",
                      color: "#999;",
                    }}
                  >
                    Reviews
                  </Box>

                  {!ReviewsMovieListPending && 
                    <Box>
                      <Box>
                        {ReviewsMovieList?.results.map((review) => (
                          <ReviewBlock key={review.id} review={review} />
                        ))}
                      </Box>

                      
                      {ReviewsMovieList?.total_pages > 1 && (
                        <Box sx={{marginTop: "30px", display: 'flex', justifyContent: 'center'}}>
                          <Pagination
                            count={ReviewsMovieList?.total_pages}
                            page={currentReviewPage}
                            variant="outlined"
                            onChange={nextReviewPage}
                            sx={{
                              "& .MuiPaginationItem-root": {
                                border: '1px solid #e50000',
                                color: '#e50000'
                              },
                              "& .MuiPaginationItem-root:hover": {
                                border: '1px solid #fff',
                                color: '#fff'
                              },
                              "& .MuiPaginationItem-root.Mui-selected": {
                                background: '#fff',
                                color: '#e50000',
                                borderColor: "white"
                              }
                            }}
                          />
                        </Box>
                      )}
                      
                    </Box>
                  }
                </Box>
              </Box>
            </Grid>

            <Grid size={4}>
              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  <Box className={style.mediaHeader__block}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontWeight: "500",
                        color: " #999;",
                      }}
                    >
                      <Box className={style.mediaHeader__sectionIcon}>
                        <img src="/img/icon/calendar.svg" alt="calendar" />
                      </Box>
                      Released Year
                    </Box>
                    {!isPendingMediaInfo && <Box sx={{ fontWeight: "600" }}>
                      {mediaInfo.release_date}
                    </Box>}
                  </Box>
                  <Box className={style.mediaHeader__block}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontWeight: "500",
                        color: " #999;",
                      }}
                    >
                      <Box className={style.mediaHeader__sectionIcon}>
                        <AccessTimeIcon />
                      </Box>
                      Runtime
                    </Box>
                    {!isPendingMediaInfo && <Box sx={{ fontWeight: "600" }}>
                      {mediaInfo.runtime} min
                    </Box>}
                  </Box>
                  <Box className={style.mediaHeader__block}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontWeight: "500",
                        color: "#999;",
                      }}
                    >
                      <Box className={style.mediaHeader__sectionIcon}>
                        <img src="/img/icon/languages.svg" alt="calendar" />
                      </Box>
                      Available Languages
                    </Box>
                    {!pendingTranslationsList && <Box className={style.mediaHeader__tags}>
                      {newTranslationsList.map((item) => (
                        <Box
                          key={item.id}
                          className={style.mediaHeader__tag}
                        >
                          {item.english_name}
                        </Box>
                      ))}
                    </Box>}
                  </Box>
                  <Box className={style.mediaHeader__block}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontWeight: "500",
                        color: "#999;",
                      }}
                    >
                      <Box className={style.mediaHeader__sectionIcon}>
                        <img src="/img/icon/ratings.svg" alt="calendar" />
                      </Box>
                      Ratings
                    </Box>
                    <Box>
                      <Box className={style.mediaHeader__ratingBlock}>
                        <Box sx={{ fontWeight: "600", marginBottom: "5px" }}>
                          IMDb
                        </Box>
                        {!isPendingMediaInfo && <Box
                          className={style.mediaHeader__ratingInfo}
                          sx={{ display: "flex", alignItems: "center" }}
                        >
                          <Rating
                            name="half-rating-read"
                            defaultValue={Number(
                              mediaInfo.vote_average.toFixed(1)
                            )}
                            precision={0.5}
                            max={10}
                            emptyIcon={
                              <StarIcon
                                style={{ color: "#999" }}
                                fontSize="inherit"
                              />
                            }
                            sx={{
                              "& .MuiRating-iconFilled": {
                                color: "#e50000",
                              },
                            }}
                            size="small"
                            readOnly
                          />
                          <Box sx={{ marginLeft: "10px" }}>
                            {mediaInfo.vote_average.toFixed(1)}
                          </Box>
                        </Box>}
                      </Box>
                    </Box>
                  </Box>
                  <Box className={style.mediaHeader__block}>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "15px",
                        fontWeight: "500",
                        color: "#999;",
                      }}
                    >
                      <Box className={style.mediaHeader__sectionIcon}>
                        <img src="/img/icon/gernes.svg" alt="calendar" />
                      </Box>
                      Genres
                    </Box>
                    <Box>
                      {!isPendingMediaInfo && <Box className={style.mediaHeader__tags}>
                        {mediaInfo.genres?.map((item) => (
                          <Link to={`/genre/${item.id}`}
                            key={item.id}
                            className={`${style.mediaHeader__tag} ${style.mediaHeader__genresItem}`}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </Box>}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default MediaDetailsContent;

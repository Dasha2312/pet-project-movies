import { Box, Container, Rating } from "@mui/material";
import Grid from "@mui/material/Grid2";

import style from "./MediaDetails.module.scss";
import { useConfiguration } from "../../hooks/useConfiguration";
import StarIcon from "@mui/icons-material/Star";
import EasySlider from "../EasySlider/EasySLider";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ReviewBlock from "../ReviewBlock/ReviewBlock";

function MediaDetailsContent({ mediaInfo, translationsList, creaditMovie, ReviewsMovieList }) {
  const {
    isPendingConfiguration,
    configuration,
    isErrorConfiguration,
    errorConfiguration,
  } = useConfiguration();

  const imageSecureBaseUrl = configuration?.imageSecureBaseUrl;
  const imageBackdropSizes = configuration?.imageBackdropSizes.at(-2);
  const imageProfileSizes = configuration?.configurationOptions.images.profile_sizes.at(1)

  return (
    <Box sx={{ marginTop: "50px" }}>
      <Box className={style.mediaHeader}>
        <Container>
          <Box className={style.mediaHeader__inner}>
            <img
              src={`${imageSecureBaseUrl}${imageBackdropSizes}${mediaInfo.backdrop_path}`}
              className={style.mediaHeader__img}
            />
            <Box className={style.mediaHeader__info}>
              <Box component="h1" className={style.mediaHeader__title}>
                {mediaInfo.original_title}
              </Box>
              <Box className={style.mediaHeader__subtitle}>
                {mediaInfo.tagline}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box className={style.mediaHeader__content}>
        <Container>
          <Grid container spacing={4}>
            <Grid size={8}>
              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  <Box className={style.mediaHeader__sectionTitle}
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
                  <Box className={style.mediaHeader__sectionText}>
                    {mediaInfo.overview}
                  </Box>
                </Box>
              </Box>

              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  <EasySlider data={creaditMovie.cast} imageSecureBaseUrl={imageSecureBaseUrl} imageProfileSizes={imageProfileSizes}  title='Cast' />
                </Box>
              </Box>

              <Box className={style.mediaHeader__section}>
                <Box className={style.mediaHeader__sectionInner}>
                  <Box className={style.mediaHeader__sectionTitle}
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

                  <Box>
                    {
                      ReviewsMovieList?.results.map(review => <ReviewBlock key={review.id} review={review} />)
                    }
                  </Box>

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
                    <Box sx={{ fontWeight: "600" }}>
                      {mediaInfo.release_date}
                    </Box>
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
                    <Box sx={{ fontWeight: "600" }}>
                      {mediaInfo.runtime} min
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
                        <img src="/img/icon/languages.svg" alt="calendar" />
                      </Box>
                      Available Languages
                    </Box>
                    <Box className={style.mediaHeader__tags}>
                      {translationsList.translations?.map((item) => (
                        <Box
                          key={item.iso_3166_1}
                          className={style.mediaHeader__tag}
                        >
                          {item.english_name}
                        </Box>
                      ))}
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
                        <img src="/img/icon/ratings.svg" alt="calendar" />
                      </Box>
                      Ratings
                    </Box>
                    <Box>
                      <Box className={style.mediaHeader__ratingBlock}>
                        <Box sx={{ fontWeight: "600", marginBottom: "5px" }}>
                          IMDb
                        </Box>
                        <Box
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
                        </Box>
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
                      <Box className={style.mediaHeader__tags}>
                        {mediaInfo.genres?.map((item) => (
                          <Box
                            key={item.name}
                            className={style.mediaHeader__tag}
                          >
                            {item.name}
                          </Box>
                        ))}
                      </Box>
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

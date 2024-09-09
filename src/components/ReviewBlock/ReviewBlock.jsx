import { Box, Rating } from '@mui/material';
import StarIcon from "@mui/icons-material/Star";

import style from './ReviewBlock.module.scss'

function ReviewBlock({review}) {
  console.log('review', review)
  return (
    <Box>
      <Box>
        <Box>{review.author_details.username}</Box>
        <Box>
        <Box
            className={style.rating__ratingInfo}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={Number(
                review.author_details.rating.toFixed(1)
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
              {review.author_details.rating.toFixed(1)}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>{review.content}</Box>
    </Box>
  );
}

export default ReviewBlock;
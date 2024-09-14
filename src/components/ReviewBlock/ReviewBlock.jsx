import { Box, Rating } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import style from "./ReviewBlock.module.scss";
import { useEffect, useRef, useState } from "react";

function ReviewBlock({ review }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    if (contentRef.current && contentRef.current.scrollHeight > 120) {
      setIsOverflowing(true);
    }
  }, [review]);

  return (
    <Box className={style.ReviewBlock}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          marginBottom: "15px",
        }}
      >
        <Box>{review.author_details.username}</Box>
        <Box>
          <Box
            className={style.rating__ratingInfo}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Rating
              name="half-rating-read"
              defaultValue={Number(review.author_details.rating)}
              precision={0.5}
              max={10}
              emptyIcon={
                <StarIcon style={{ color: "#999" }} fontSize="inherit" />
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
              {review.author_details.rating}
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={style.ReviewBlock__content}>
        <Box 
          className={style.ReviewBlock__contentInner} 
          ref={contentRef}
          style={{
            maxHeight: isExpanded ? "none" : "120px",
            overflow: "hidden",
            transition: "max-height 0.3s ease",
          }}
        >
          {review.content}
        </Box>
          {isOverflowing && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="btn-outline"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </button>
          )}
      </Box>
    </Box>
  );
}

export default ReviewBlock;

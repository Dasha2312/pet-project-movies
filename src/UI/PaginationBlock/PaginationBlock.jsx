import { Box, Pagination } from '@mui/material';


function PaginationBlock({currentReviewPage, nextReviewPage, total_pages}) {

  return (
    <>
      {total_pages > 1 && (
        <Box sx={{marginTop: "90px", display: 'flex', justifyContent: 'center'}}>
          <Pagination
            count={total_pages}
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
              },
              "& .MuiPaginationItem-ellipsis": {
                height: '32px',
                lineHeight: '1.5'
              }
            }}
          />
        </Box>
      )}
    </>
  );
}

export default PaginationBlock;
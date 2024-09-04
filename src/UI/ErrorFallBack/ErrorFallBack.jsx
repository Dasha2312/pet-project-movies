import { Box, Button } from "@mui/material";

function ErrorFallBack({error, resetErrorBoundary}) {
  return (
    <Box>
      <Box>
        <Box component="h1">Something went wrong</Box>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>Try again</Button>
      </Box>
    </Box>
  );
}

export default ErrorFallBack;
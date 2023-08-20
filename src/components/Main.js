import React from 'react';
import { Typography, Box } from "@mui/material";

const Main = () => {
  return (
    <div>
        <Box
        sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}
        >
            <Typography variant="h4" component="div">
                Please Login to get Full Access
            </Typography>
        </Box>
    </div>
  )
}

export default Main

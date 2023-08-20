import React from 'react';
import { Typography, Box } from "@mui/material";
import Header from "../components/Header";

const Main = () => {
  return (
    <div>
        <Header/>
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

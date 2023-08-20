import React from 'react';
import Header from "../components/Header";
import { Typography, Box } from "@mui/material";

const Home = () => {
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
                Home Page
            </Typography>
        </Box>
    </div>
  )
}

export default Home
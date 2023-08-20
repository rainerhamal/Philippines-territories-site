import React from 'react';
import Header from "../components/Header";
import { Typography, Box } from "@mui/material";

const Login = () => {
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
                Login Page
            </Typography>
        </Box>
    </div>
  )
}

export default Login
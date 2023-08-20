import React from 'react';
import Header from "../components/Header";
import { 
    Typography, 
    Box,
    TextField, 
    Button, 
    Paper, 
    makeStyles } from "@mui/material";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post(
                'https://netzwelt-devtest.azurewebsites.net/Account/SignIn',
                {
                    username: username,
                    password: password,
                }
            );

            const token = response.data.token;

            localStorage.setItem('authToken', token);

            navigate('/home');
        } catch(error) {
            console.error('Authentication failed:', error);
            setErrorMessage('Invalid username and/or password');
        }
    };

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
                <div>
                    <Typography component="h1" variant="h5">
                    Login
                    </Typography>
                    <TextField
                    variant="outlined"
                    margin="normal"
                    label="Username"
                    fullWidth
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                    <TextField
                    variant="outlined"
                    margin="normal"
                    label="Password"
                    type="password"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    onClick={handleLogin}
                    >
                    Login
                    </Button>
                    {errorMessage && (
                    <Typography color="error" variant="body2" align="center">
                        {errorMessage}
                    </Typography>
                    )}
                </div>            

        </Box>
    </div>
  )
}

export default Login
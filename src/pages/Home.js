import React from 'react';
import Header from "../components/Header";
import { Typography, Box, Container } from "@mui/material";
import axios from "axios";
import { useState, useEffect } from "react";

const Home = () => {

    const [territories, setTerritories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTerritories = async () => {
          try {
            const response = await axios.get(
              'https://netzwelt-devtest.azurewebsites.net/Territories/All'
            );
            setTerritories(response.data);
            setLoading(false);
          } catch (error) {
            console.error('Error fetching data:', error);
            setLoading(false);
          }
        };
    
        fetchTerritories();
      }, []);

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
            <Container component="main">
                <Typography component="h1" variant="h5">
                    Territories
                </Typography>
                {loading ? (
                    <Typography>Loading...</Typography>
                    ) : (
                        <ul>
                        {territories.map((territory) => (
                            <li key={territory.id}>{territory.name}</li>
                        ))}
                        </ul>
                    )}
            </Container>
        </Box>
    </div>
  )
}

export default Home
import React, { useState, useEffect } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";


// const navItems = ['Home', 'About', 'Contact'];

const Header = () => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const authenticateUser = async (username, password) => {
        try {
            const response = await axios.post(
                'https://netzwelt-devtest.azurewebsites.net/Account/SignIn',
                {
                    username: username,
                    password: password,
                }
            );
            const token = response.data.token;

            return token;
        } catch (error) {
            console.error('Authentication failed:', error);
            return null
        }
    };

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setDrawerOpen(open);
    };
    const handleHomeClick = async () => {
        //Check if user is logged in
        // const isLoggedIn = true; 
        const token = await authenticateUser('your_username', 'your_password');

        if (token) {
            navigate('/home'); //Authenticate user navigates to home page
        } else {
            navigate('/login'); //Unauthenticated user navigates to login page
        }
    };

    const handleLoginClick = () => {
        navigate('/login');
    }

    const drawerContent = (
        <Box sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                TPT
            </Typography>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton 
                    sx={{ textAlign: 'center' }}
                    onClick={handleHomeClick}
                    >
                        <ListItemText primary="Home"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="About"/>
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }}>
                        <ListItemText primary="Contact"/>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    

    return (
    // <header><h2>This is a sample header</h2></header>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            The Philippines Teritorries
          </Typography>
          <Button color="inherit" onClick={handleLoginClick}>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
          }}
      >
        {drawerContent}
      </Drawer>
    </Box>
    );
}

export default Header;
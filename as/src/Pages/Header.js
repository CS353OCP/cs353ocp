import * as React from "react";

// importing material UI components
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import {useState} from "react";

const Header=({isLoggedIn=false, logoutButton})=> {

    const navigate = useNavigate();
    const Login = () => {
        navigate('/login');
    }

    const Register = () => {
        navigate('register');
    }
    const Friends = () => {
        navigate('friends');
    }
    const Events = () => {
        navigate('events');
    }
    const Profile = () => {
        navigate('profile');
    }

    const Logout = () => {
        logoutButton();
        navigate('/');
        window.location.reload();
    }


    const Navbar = () =>{
        let navbar;
            if(isLoggedIn){
                navbar = <>
                    <Button color="inherit" onClick={Events}>Events</Button>
                    <Button color="inherit" onClick={Friends}>Friends</Button>
                    <Button color="inherit" onClick={Profile}>Profile</Button>
                    <Button color="inherit" onClick={Logout}>LogOut</Button>

                </>
            }
            else{
                navbar=<>
                    <Button color="inherit" onClick={Events}>Events</Button>
                    <Button color="inherit" onClick={Login}>Login</Button>
                    <Button color="inherit" onClick={Register}>Register</Button>
                </>
            }
        return navbar;
    }

    return (
        <AppBar position="static" sx={{height:"7vh", backgroundColor:"#6C4AB6"}}>
            <Toolbar>
                {/*Inside the IconButton, we
                   can render various icons*/}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    {/*This is a simple Menu
                     Icon wrapped in Icon */}
                    <MenuIcon />
                </IconButton>
                {/* The Typography component applies
           default font weights and sizes */}

                <Typography variant="h6"
                    component="div" sx={{ flexGrow: 1 }}>
                    E V E N T B R I T E

                </Typography>
                {Navbar()}
            </Toolbar>
        </AppBar>
    );
}

export default Header;

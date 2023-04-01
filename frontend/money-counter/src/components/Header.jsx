import React from "react";
import { Typography, Toolbar, AppBar } from '@mui/material'

const Header = () => {
    return (
        <AppBar position='sticky' >
            <Toolbar>
                <Typography variant="h3">Hello world</Typography>
                <Typography variant="a">Hello world</Typography>
                <Typography variant="a">Hello world</Typography>
                <Typography variant="a">Hello world</Typography>
            </Toolbar> 
        </AppBar>        
    );
}


export default Header;
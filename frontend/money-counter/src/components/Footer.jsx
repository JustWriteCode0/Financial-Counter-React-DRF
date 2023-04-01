import React from "react";
import { Typography, Box } from '@mui/material'

const Footer = () => {
    return (
        <Box className="footer" sx={{
            backgroundColor: 'secondary.main',
        }}>
            <Typography variant="p">@github tudi sudi i td</Typography>
        </Box>
    );
}

export default Footer;
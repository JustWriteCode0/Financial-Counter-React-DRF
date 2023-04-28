import React from "react";
import { Typography, Toolbar, AppBar } from '@mui/material'
import { Link } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import CategoriesPage from '../pages/CategoriesPage';
import EntriesPage from "../pages/EntriesPage";


const Header = () => {
    return (
        <>
        <AppBar position='sticky' >
            <Toolbar>
                <Typography mr={2} variant="label" className="brand-logo">Counter</Typography>
                <Link to="/" className="navbar-item">Entries</Link>
                <Link to="/category" className="navbar-item">Category</Link>
            </Toolbar> 
        </AppBar>
        <Routes>
            <Route path="/" element={<EntriesPage />}></Route>
            <Route path="/category" element={<CategoriesPage />}></Route>
        </Routes>
        </>
    );
}


export default Header;
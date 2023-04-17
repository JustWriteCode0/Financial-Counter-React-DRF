import { Category, WidthFull } from '@mui/icons-material';
import { Box, Typography, Modal, Button, FormControl, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';


const CategoryModalForm = ({open, onClose}) => {
    const [categoryForm, setCategoryForm] = useState({title: '', describe: '', color: ''})
    const {title, describe, color} = categoryForm

    const CategoryhandleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/category/', categoryForm); // send data to server
          console.log(response.data, "response data")
        } catch (error) {
          console.error(error);
        }
      };

    if (!open) return null
    return(
        <Modal open={open} onClose={onClose} className="category-modal">
            <Box className="modal-content">
                <h1>{ title }</h1>
                <h1>{ describe }</h1>
                <h1>{ color }</h1>
                <form action="" >
                    <FormControl fullWidth>
                        <Typography textAlign="center" fontWeight={500} fontSize={20} mb={2} variant='label' >create category</Typography>
                        <TextField fullWidth label="name" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, title: e.target.value})} />
                        <TextField label="content" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, describe: e.target.value})} />
                        <TextField label="color" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, color: e.target.value})} />
                        <Button variant="contained" type="button" onClick={CategoryhandleSubmit} color="primary">Submit</Button>
                    </FormControl>
                </form>
                    
                
            </Box>
        </Modal> 
    )
}

export default CategoryModalForm
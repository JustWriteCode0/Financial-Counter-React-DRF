import { Category, WidthFull } from '@mui/icons-material';
import { Box, Typography, Grid, Button, FormControl, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';


const CategoryModalForm = ({onCategorySubmit ,open, onClose}) => {
    const [categoryForm, setCategoryForm] = useState({title: '', describe: '', color: ''})
    const {title, describe, color} = categoryForm

    const CategoryhandleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/category/', categoryForm); // send data to server
          onCategorySubmit(response.data)
          console.log(response.data, "response data")
        } catch (error) {
          console.error(error);
        }
      };

    return(
            <Grid container className="modal-content">
                <form action="" >
                    <FormControl fullWidth>
                        <TextField fullWidth label="Name" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, title: e.target.value})} />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField fullWidth label="Color" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, color: e.target.value})} />
                    </FormControl>
                    <FormControl fullWidth>
                        <TextField fullWidth label="Content" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, describe: e.target.value})} />
                    </FormControl>
                    <Button fullWidth variant="contained" type="button" onClick={CategoryhandleSubmit} color="primary">Submit</Button>
                    
                </form>
                    
                
            </Grid>
    )
}

export default CategoryModalForm
import { Grid, Button, FormControl, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import Sketch from '@uiw/react-color-sketch';


const CategoryForm = ({onCategorySubmit}) => {
    const [categoryForm, setCategoryForm] = useState({title: '', describe: '', color: ''})
    const {title, describe, color} = categoryForm

    const CategoryhandleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/category/', categoryForm); // send data to server
          onCategorySubmit(response.data)
        } catch (error) {
          console.error(error);
        }
      };

    return(
        <Grid container className="modal-content">
            <form action="" onSubmit={CategoryhandleSubmit}>
                <FormControl fullWidth>
                    <TextField required fullWidth label="Name" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, title: e.target.value})} />
                </FormControl>
                <FormControl fullWidth>
                    <Sketch style={{ marginLeft: 20 }} color={categoryForm.color} onChange={(e) => setCategoryForm({...categoryForm, color: e.hex})}/>
                </FormControl>
                <FormControl fullWidth>
                    <TextField fullWidth label="Content" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, describe: e.target.value})} />
                </FormControl>
                <Button fullWidth variant="contained" type="submit"  color="primary">Submit</Button>
            </form>
        </Grid>
    )
}

export default CategoryForm
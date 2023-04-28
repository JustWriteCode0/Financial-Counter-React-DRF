import { Grid, Button, FormControl, TextField, Box, Modal, Typography } from '@mui/material';
import axios from 'axios';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import Sketch from '@uiw/react-color-sketch';


const CategoryForm = ({onCategorySubmit}) => {
    const [categoryForm, setCategoryForm] = useState({title: '', describe: '', color: '#b10933'})
    const {title, describe, color} = categoryForm
    const [open, setOpen] = useState(false)


    const handleCategorySubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/category/', categoryForm); // send data to server
          onCategorySubmit(response.data)
        } catch (error) {
          console.error(error);
        }
      };    


    const handleColorChange = (e) => {
        setCategoryForm({...categoryForm, color: e.hex})
    }

    const handleColorChangeDebounce = debounce(handleColorChange, 300)


    const handleClose = () => {
        console.log('testing')
        setOpen(!open);
    };

    return(
        <Grid container className="modal-content">
            <form action="" onSubmit={handleCategorySubmit}>
                <FormControl fullWidth>
                    <TextField required fullWidth label="Name" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, title: e.target.value})} />
                </FormControl>
                    
                <Box variant="div" display="flex" flexDirection="row">
                    <FormControl fullWidth>
                        <TextField disabled value={categoryForm.color} variant="filled" onChange={(e) => setCategoryForm({...categoryForm, color: e.target.value})} />
                    </FormControl>
                    <Button sx={{ background: categoryForm.color, fontWeight: 600 }} onClick={handleClose}>Color</Button>
                    <Modal className="modalCategoryColor" open={open} onClose={handleClose}>
                        <Box>
                            <Sketch color={categoryForm.color} onChange={handleColorChangeDebounce}/>
                        </Box>
                    </Modal>
                </Box>
                
                <FormControl fullWidth>
                    <TextField fullWidth label="Content" variant="filled" onChange={(e) => setCategoryForm({...categoryForm, describe: e.target.value})} />
                </FormControl>
                <Button fullWidth variant="contained" type="submit"  color="primary">Submit</Button>
            </form>
        </Grid>
    )
}

export default CategoryForm
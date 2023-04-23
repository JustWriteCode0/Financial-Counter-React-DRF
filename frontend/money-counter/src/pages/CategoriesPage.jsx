import React, { useState, useEffect } from "react";
import axios from "axios";
import AddCircleIcon from '@mui/icons-material/Circle'
import { Button, Typography, List, ListItem, Grid, Paper } from "@mui/material";
import CategoryModalForm from "../components/CategoryModalForm";


const CategoriesPage = () => {
    const [option, setOption] = useState([])
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        // get all entries from main url
        fetch("http://127.0.0.1:8000/api/v1/category/").then((data)=>data.json()).then((val)=>setOption(val))
    }, [])

    const handleCategorySubmit = (response) => {
        console.log(response, "RESPONSE___")
        if (option) {
            setOption([...option, response])
        }
    }
  
      const deleteCategory = (id) => {
        axios
        .delete(`http://127.0.0.1:8000/api/v1/category/${id}/`)
        .then((response) => {
          setOption(option.filter(option => option.id !== id))
        });
      }

    return (
        <Grid container  alignContent="center" justifyContent="center" my={4} mb={15}>
            <Grid item xs={6} sm={4} md={4} borderRadius={5}>
                <CategoryModalForm open={openModal} onClose={() => setOpenModal(false)} onCategorySubmit={handleCategorySubmit} /> 
                    <List>
                        {
                        option.map((opts)=>
                            <Paper elevation={3}>
                                <ListItem key={opts.id} className="category-list-item" sx={{
                                    boxShadow: `inset 5px 0px 0px 0px ${opts.color}!important`,
                                    justifyContent: "space-between",
                                    }}>
                                    <Typography mr={2} variant="label">{opts.title}</Typography>
                                    <Button variant="contained" size="small" color="error"  onClick={() => deleteCategory(opts.id)}>delete</Button>
                                </ListItem>
                            </Paper>
                            )
                        }
                    </List>
            </Grid>
        </Grid>
    )
}

export default CategoriesPage
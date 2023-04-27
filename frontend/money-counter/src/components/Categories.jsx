import React, { useState, useEffect } from "react";
import axios from "axios";
import AddCircleIcon from '@mui/icons-material/Circle'
import { Button, Typography, List, ListItem, Grid, Paper } from "@mui/material";
import CategoryForm from "../components/CategoryForm";


const Categories = ({data}) => {
    const [categories, setCategories] = useState({data: []})

    useEffect(() => {
        // get all categories from main url
          axios
            .get("http://127.0.0.1:8000/api/v1/category/")
            .then((response) => {
            setCategories({ data: response.data })
          });
      }, [data]);

    const deleteCategory = (id) => {
        axios
        .delete(`http://127.0.0.1:8000/api/v1/category/${id}/`)
        .then((response) => {
            setCategories({data: categories.data.filter(category => category.id !== id)})
        });
      }

    return (
        <Grid container alignContent="center" justifyContent="center">
            <Grid item xs={6} sm={4} md={4} borderRadius={5}>
                    <List>
                        {
                        categories.data.map((category)=>
                            <Paper elevation={3} key={category.id}>
                                <ListItem className="category-list-item" sx={{
                                    boxShadow: `inset 5px 0px 0px 0px ${category.color}!important`,
                                    justifyContent: "space-between",
                                    }}>
                                    <Typography mr={2} variant="label">{category.title}</Typography>
                                    <Button variant="contained" size="small" color="error"  onClick={() => deleteCategory(category.id)}>delete</Button>
                                </ListItem>
                            </Paper>
                            )
                        }
                    </List>
            </Grid>
        </Grid>
    )
}

export default Categories
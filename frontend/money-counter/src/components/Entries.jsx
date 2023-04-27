import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Paper, Typography, Button, Grid, List, ListItem } from '@mui/material'
import { Delete } from '@mui/icons-material'


const Entries = ({data}) => {
  const [entry, setEntry] = useState({data: []})
  const [category, setCategory] = useState({category: []})
  
  useEffect(() => {
    // get all entries from main url
      axios
        .get("http://127.0.0.1:8000/api/v1/entry/")
        .then((response) => {
          setEntry({ data: response.data })
      });
  }, [data]);
  

  const removeEntry = (id) => {
    // send delete request to server and remove an entry by id
    axios
      .delete(`http://127.0.0.1:8000/api/v1/entry/${id}/`)
      .then((response) => {
        setEntry({data: entry.data.filter(entry => entry.id !== id)}); // update list of entries for call useEffect
      }) 
      .catch((error) => {
        console.log(error)
      });
  }

  return (
      entry.data.map(entry => {
        return (
          <Grid container alignContent="center" justifyContent="center" key={entry.id}>
            <Grid item xs={10} sm={6}>
              <List>
                <Paper elevation={3}>
                  <ListItem sx={{
                  backgroundColor: "#c9c9c9",
                  marginTop: "5px",
                  padding: "20px",
                  justifyContent: "space-between"
                  }}>
                  <Typography variant="label" fontWeight={600}>-{entry.spent}$</Typography>
                  <Typography variant="p" fontWeight={600}>{entry.content}</Typography>
                  <Typography variant="p" fontWeight={600}>{entry.category}</Typography>
                  <Button startIcon={<Delete />} variant="contained" color="error" size="small" type="submit" onClick={() => removeEntry(entry.id)}>DELETE {entry.id}</Button>
                </ListItem>
                </Paper>
              </List>
              </Grid>
            </Grid>     
        )
    })   
  )
}


export default Entries
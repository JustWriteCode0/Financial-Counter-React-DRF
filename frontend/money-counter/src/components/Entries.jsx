import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Container, Typography, Button, Box, Stack } from '@mui/material'
import { Delete } from '@mui/icons-material'


const Entries = ({data}) => {
  const [entry, setEntry] = useState([])
  
  useEffect(() => {
    // get all entries from main url
      axios
        .get("http://127.0.0.1:8000/api/v1/entry/")
        .then((response) => {
          setEntry(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
  }, [data]);
  

  const removeEntry = (id) => {
    // send delete request to server and remove an entry by id
    axios
      .delete(`http://127.0.0.1:8000/api/v1/entry/${id}/`)
      .then((response) => {
        console.log(response)
        setEntry(entry.filter(entry => entry.id !== id)); // update list of entries for call useEffect
      }) 
      .catch((error) => {
        console.log(error)
      });
  }

  return (
    <Container sx={{
      backgroundColor: 'success.main',
      marginTop: '100px',
      marginBottom: '100px',
      }}>
        {entry.map(entry => {
        return (
        
          <Box className='entries' key={entry.id} style={{background:entry.color}} sx={{
            backgroundColor: 'primary.main',
            padding: '10px',
            color: 'white',
          }}>
            <Stack direction="column" >
            <Typography variant="h3">-{entry.spent}$</Typography>
            <Typography variant="p" fontWeight={600} >{entry.content}</Typography>
            <Button startIcon={<Delete />} variant="contained" color="error" size="small" type="submit" onClick={() => removeEntry(entry.id)}>DELETE</Button>
            </Stack>
          </Box>
       
        )
      })}
    </Container>
  )
}


export default Entries
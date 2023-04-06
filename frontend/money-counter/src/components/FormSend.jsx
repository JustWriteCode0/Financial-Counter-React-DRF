import React, {useState} from 'react'
import axios from 'axios';
import { Grid, TextField, Select, setSelectedValue, MenuItem, Button, FormControl, Box } from '@mui/material'
import { CenterFocusStrong } from '@mui/icons-material';


const FormSend = ({ onSubmitSuccess, data }) => {
    const [form, setForm] = useState({category: '', spent: '', content: ''}); // state of form, this variable will getting info from form
    const { spent, content, category} = setForm;

    const entries = Object.entries(data);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/entry/', form); // send data to server
          console.log(response.data, 'response from server after post request');
          onSubmitSuccess(response.data);
        } catch (error) {
          console.error(error);
        }
      };
      console.log(entries, 'hi')
    return (
      <Grid container justifyContent="center" alignItems="center" my={4} mb={15}>
        <Grid item xs={6} sm={4} md={4} borderRadius={5}> 
          
          <form id="create-form" onSubmit={handleSubmit}>
            <Box variant="div" display="flex" flexDirection="row">
              <TextField
                fullWidth
                type="number"
                label="Expended"
                variant="filled"
                className="spent"
                required 
                value={spent} 
                onChange={(e) => setForm({...form, spent: e.target.value})} 
              />
              <Select variant="filled" onChange={(e) => setForm({...form, category: e.target.value})}>
                <MenuItem >Ten</MenuItem>
              </Select>
            </Box>
            <FormControl fullWidth> 
              <TextField
                label="For what"
                variant="filled"
                className="content"
                required
                value={content}
                onChange={(e) => setForm({...form, content: e.target.value})}
              />
            </FormControl> 
            <Button fullWidth variant="contained" type="submit">Add</Button>
          </form>

        </Grid>
      </Grid>
    );
  }

export default FormSend
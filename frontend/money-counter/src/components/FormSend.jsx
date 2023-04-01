import React, {useState} from 'react'
import axios from 'axios';
import { Input, TextField, Box, Button, FormControl } from '@mui/material'


const FormSend = ({ onSubmitSuccess }) => {
    const [form, setForm] = useState({spent: 'i', content: ''}); // state of form, this variable will getting info from form
    const { spent, content } = setForm;


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

    return (
        <Box className='form-send'>
            <form id="create-form" onSubmit={handleSubmit} >
              <FormControl>
                <TextField type="number" label="Expended" variant="filled"  className="spent" required value={spent} onChange={(e) => setForm({...form, spent: e.target.value})} />
                <TextField label="For what" variant="filled" className="content" required value={content} onChange={(e) => setForm({...form, content: e.target.value})} />
                <Button variant="contained" type="submit">Add</Button>
              </FormControl>
            </form>
        </Box>
    );
  }

export default FormSend
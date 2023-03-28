import React, {useState} from 'react'
import axios from 'axios';


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
        <div className='form-send'>
            <form id="create-form" onSubmit={handleSubmit}>
                <input type="number" className="spent" required value={spent} onChange={(e) => setForm({...form, spent: e.target.value})} />
                <input className="content" required value={content} onChange={(e) => setForm({...form, content: e.target.value})} />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}


export default FormSend
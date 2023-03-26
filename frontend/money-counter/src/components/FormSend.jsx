import React, {useState} from 'react'
import axios from 'axios';


const FormSend = ({ onClick }) => {
    const [form, setForm] = useState({entry_status: 'without status', content: ''}); // state of form, this variable will getting info from form
    const { entry_status, content } = setForm;


    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/v1/entry/', form); // send data to server
          console.log(response.data);
          
          onClick(response.status)
        } catch (error) {
          console.error(error);
        }
      }; 

    return (
        <div className='form-send'>
            <form id="create-form" onSubmit={handleSubmit}>
                <input type="hidden" value={entry_status} />
                <input className="content" required value={content} onChange={(e) => setForm({...form, content: e.target.value})} />
                <button type="submit" onClick={handleSubmit}>Add</button>
            </form>
        </div>
    );
}


export default FormSend
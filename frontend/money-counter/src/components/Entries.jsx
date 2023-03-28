import React, {useState, useEffect} from 'react'
import axios from 'axios'


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
    <div>
      {entry.map(entry => {
        return (
          <div className='entries' key={entry.id} style={{background:entry.color}}>
            <h3 className='entry-spent'>-{entry.spent}$</h3>
            <p className='entry-content'>{entry.content}</p>
            <button type="submit" onClick={() => removeEntry(entry.id)}>DELETE</button>
          </div>
        )
      })}
    </div>
  )
}


export default Entries
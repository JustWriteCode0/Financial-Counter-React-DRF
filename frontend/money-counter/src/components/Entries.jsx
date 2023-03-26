import React, {useState, useEffect, fetchData} from 'react'
import axios from 'axios'


const Entries = ({ post_request }) => {
  const [entry, setEntry] = useState([])
  useEffect(() => {
      axios
        .get("http://127.0.0.1:8000/api/v1/entry/")
        .then(data => {
            setEntry(data.data);
        })
        .catch(function (error) {
            console.log(error);
        })
  }, [post_request])


  return (
    <div>
      <h1>{post_request}</h1>
      {post_request === 201}
      {entry.map(entry => {
        return (
          <div className='entries' key={entry.id} style={{background:entry.color}}>
            <p className='entry'>{entry.content}</p>
          </div>
        )
      })}
    </div>
  )
}


export default Entries
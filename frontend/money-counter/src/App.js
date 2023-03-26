import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FormSend from "./components/FormSend"
import Entries from './components/Entries';
import React, {useState, useEffect} from "react";
import axios from "axios";


const App = () => {
  const [post_request, setRequest] = useState('')

  const handleSubmit = (post_request) => {
    setRequest(post_request)
  }

  return (
    <div>
      <Header />
      <p>Data from django</p>
      <div>
        <FormSend onClick={handleSubmit}  />
        <Entries post_request={post_request} />
      </div>
    <Footer />
    </div>
    )
  }



export default App;

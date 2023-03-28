import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FormSend from "./components/FormSend"
import Entries from './components/Entries';
import React, {useState, useEffect} from "react";
import axios from "axios";


const App = () => {
  const [data, setData] = useState([]) // создаем состояние для данных

  const handleFormSubmit = (newData) => {
    setData([...data, newData]) // добавляем новые данные в состояние
  }

  return (
    <div>
      <Header />
      <p>Data from django</p>
      <div>
        <FormSend onSubmitSuccess={handleFormSubmit}/>
        <Entries data={data} />
      </div>
    <Footer />
    </div>
    )
  }



export default App;

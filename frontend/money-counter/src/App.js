import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import FormSend from "./components/FormSend"
import Entries from './components/Entries';
import React, {useState} from "react";
import { Box } from '@mui/material'


const App = () => {
  const [data, setData] = useState({entry: []}) // создаем состояние для данных

  const handleFormSubmit = (newData) => {
    setData({entry: [...data.entry, newData]}) // добавляем новые данные в состояние
  }
  console.log(data.entry, 'dataEntry')
  return (
    <Box variant="div">
      <Header />
      <Box variant="div">
        <FormSend data={data} onSubmitSuccess={handleFormSubmit}/>
        <Entries data={data} />
      </Box>
      <Footer />
    </Box>
    )
  }



export default App;

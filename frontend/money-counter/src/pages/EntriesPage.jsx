import FormSend from "../components/FormSend"
import Entries from "../components/Entries"
import React, { useState } from "react"
import { Box } from "@mui/material"


const EntriesPage = () => {
    const [data, setData] = useState({entry: []}) // создаем состояние для данных

    const handleFormSubmit = (newData) => {
      setData({entry: [...data.entry, newData]}) // добавляем новые данные в состояние
    }
    console.log(data.entry, 'dataEntry')
    return (
        <Box variant="div">
          <FormSend data={data} onSubmitSuccess={handleFormSubmit}/>
          <Entries data={data} />
        </Box>
    )
}

export default EntriesPage
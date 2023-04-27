import EntryForm from "../components/EntryForm"
import Entries from "../components/Entries"
import React, { useState } from "react"
import { Box } from "@mui/material"


const EntriesPage = () => {
    const [data, setData] = useState({entry: []}) // создаем состояние для данных

    const handleFormSubmit = (newData) => {
      setData({entry: [...data.entry, newData]}) // добавляем новые данные в состояние
    }
    return (
        <Box variant="div">
          <EntryForm data={data} onSubmitSuccess={handleFormSubmit}/>
          <Entries data={data} />
        </Box>
    )
}

export default EntriesPage
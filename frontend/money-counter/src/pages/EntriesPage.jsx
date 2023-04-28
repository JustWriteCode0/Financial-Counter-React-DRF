import EntryForm from "../components/EntryForm"
import Entries from "../components/Entries"
import React, { useState } from "react"
import { Box } from "@mui/material"


const EntriesPage = () => {
    const [data, setData] = useState({entry: []})

    const handleFormSubmit = (newData) => {
      setData({entry: [...data.entry, newData]})
    }
    return (
        <Box variant="div">
          <EntryForm data={data} onSubmitSuccess={handleFormSubmit}/>
          <Entries data={data} />
        </Box>
    )
}

export default EntriesPage
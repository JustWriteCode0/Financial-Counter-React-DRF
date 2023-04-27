import React, { useState, useEffect } from 'react'
import { Box } from '@mui/material'
import Categories from '../components/Categories'
import CategoryForm from '../components/CategoryForm'


const CategoriesPage = () => {
    const [data, setData] = useState({category: []})
  
    const handleCategorySubmit = (newData) => {
        setData({category: [...data.category, newData]})
    }

    console.log(data.category, 'data.category')
    
    return (
      <Box>
        <CategoryForm onCategorySubmit={handleCategorySubmit} />
        <Categories data={data} />
      </Box>
    )
  }
  

export default CategoriesPage
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const RecipeDetail = () => {
  const {id}=useParams
  const [loadData,setLoadData]= useState(null)
  useEffect(()=>{
    async function items(params) {
      
    }
  })
  return (
    <div>
      
    </div>
  )
}

export default RecipeDetail

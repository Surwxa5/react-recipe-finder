import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetail = () => {
  const {id}=useParams()
  const [loadData,setLoadData]= useState(null)
  useEffect(()=>{
    async function items() {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      const data = await res.json()
      setLoadData(data.meals[0])
    }
    items()
  },[id])
  if(!loadData) return <p>Loading.........</p>
  return (
    <div style={{padding:'20px',maxWidth:'500px',margin:'0 auto'}}>
      <img style={{width:'400px', height:'400px'}} src={loadData.strMealThumb} alt="" />
        <h1>{loadData.strMeal}</h1> 
        <p>{loadData.strInstructions}</p>
      
    </div>
  )
}

export default RecipeDetail

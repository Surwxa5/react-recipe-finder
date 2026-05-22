import React, { useEffect, useState } from 'react'
import RecipeCard from '../component/RecipeCard'

const Recipes = () => {
  const [loadData,setLoadData] = useState([])
  const [loading,setLoading] = false;
  const [search,setSearch] =('')
  useEffect(()=>{
  async function items() {
    try{
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    const data = await res.json()
    setLoadData(data)
    setLoading(false)
  }catch(error){
    console.log("Failled to load",error)
    setLoading(false)
  }
  }
    items()
    },[])
      const filtered = loadData.filter(loadData=>loadData.name.toLowerCase().includes(search.toLowerCase())

    )
  
  return (
    <div>
      <h1>Item List:</h1>
      <input type="text" value={setSearch} placeholder='Enter a Item name...' onChange={(e)=>setSearch(e.target.value)} />
     {loading?<p>Loading.....</p>: setLoading(false)}

     <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"20px"}}>

      {filtered.map(loadData=>(
        <RecipeCard key={loadData.idMeal}
        id={loadData.idMeal}
        name = {loadData.strMeal}
        catagory={loadData.strCategory}
        area ={loadData.strArea}
        image={loadData.strMealThumb}
        />
      ))}
     </div>
    </div>
  )
}

export default Recipes

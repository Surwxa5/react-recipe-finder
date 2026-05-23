import React, { useEffect, useState } from 'react'
import RecipeCard from '../component/RecipeCard'

const Recipes = () => {
  const [loadData,setLoadData] = useState([])
  const [loading,setLoading] = useState(true);
  const [search,setSearch] =useState('')
  useEffect(()=>{
  async function items() {
    try{
    const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken')
    const data = await res.json()
    setLoadData(data.meals)
    setLoading(false)
  }catch(error){
    console.log("Failled to load",error)
    setLoading(false)
  }
  }
    items()
    },[])
    const filtered = loadData.filter(data => data.strMeal.toLowerCase().includes(search.toLowerCase()))
  return (
    <div>
      <h1>Item List:</h1>
      <input style={{width:'600px',height:"50px",border:'solid black 2px',marginLeft:'300px',marginBottom:'20px',marginTop:'20px'}} type="text" value={search} placeholder='Enter a Item name...' onChange={(e)=>setSearch(e.target.value)} />
     

     <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(250px,1fr))",gap:"20px" ,marginTop:'30px'}}>

      {filtered.map(data=>(
        <RecipeCard key={data.idMeal}
        id={data.idMeal}
        name = {data.strMeal}
        catagory={data.strCategory}
        area ={data.strArea}
        image={data.strMealThumb}
        />
      ))}
     </div>
    </div>
  )
}

export default Recipes

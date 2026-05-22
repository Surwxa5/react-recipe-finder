import React from 'react'

const RecipeCard = ({name,catagory,area,country,instruction,id}) => {
  return (
    <div>
      <img src="" alt="" />
      <h2>{name}</h2>
      <h3>{catagory}</h3>
      <h3>{area}</h3>
      <h3>{country}</h3>
      <h3>{Instruction}</h3>
    </div>
  )
}

export default RecipeCard

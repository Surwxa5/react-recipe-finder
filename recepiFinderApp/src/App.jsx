import { useState } from 'react'
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Recipes from './pages/Recipes'
import Home from './pages/Home'
import RecipeCard from './component/RecipeCard'
import RecipeDetail from './pages/RecipeDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
     <nav style={{padding:'16px',borderBottom:'1px solid #eee' , display:'flex', gap:'16px'
     }}>
      <Link to='/'>Home</Link>
      <Link to='/recipes'>Recipes</Link>
    </nav>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/recipes' element={<Recipes/>}></Route>
      <Route path='/recipes/:id' element={<RecipeDetail/>}></Route>
    </Routes>
     </BrowserRouter>
     
    </>
  )
}

export default App

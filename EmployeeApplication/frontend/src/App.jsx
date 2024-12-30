import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import Add from './components/Add'
import View from './components/View'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/add' element={<Add />} />
        <Route path='/view' element={<View />} />
      </Routes>
      <NavBar />
    
      
    </>
  )
}

export default App

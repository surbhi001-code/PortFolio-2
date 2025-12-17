import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <div >
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
      </Routes>
    </div>
  )
}

export default App

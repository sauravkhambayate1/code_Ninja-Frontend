import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from './Components/API/Community'
import Courses from './Components/API/Courses'
import Scholarship from './Components/API/Scholarship'
import Practise from './Components/API/Practise'
import Login from './Components/API/Login'
import Register from './Components/API/Register'
import Dashboard from './Components/Dashboard'
const Routers = () => {
  return (
    <div>
        <Routes>
      
      <Route path='/courses' element={<Courses/>}/>
      <Route path='/scholarship' element={<Scholarship/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/practise' element={<Practise/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>


        </Routes>
    </div>
  )
}

export default Routers

import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Community from './Components/API/Community'
import Courses from './Components/API/Courses'
import Scholarship from './Components/API/Scholarship'
import Practise from './Components/API/Practise'
// import Login from './Components/API/Login'
// import Register from './Components/API/Register'
import Dashboard from './Components/Dashboard'
import Home from './Components/API/Home'

import BasicForm from './pages/BasicForm'

import PersonalInfo from './pages/Sample'
import NewCourse from './pages/NewCourse'
import FinalPage from './pages/FInal'
const Routers = () => {
  return (
    <div>
        <Routes>
        
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/scholarship' element={<Scholarship/>}/>
      <Route path='/community' element={<Community/>}/>
      <Route path='/practise' element={<Practise/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      {/* <Route path='/register' element={<Register/>}/> */}
      <Route path='/User/Course/:id' element={<NewCourse/>}/>
      <Route path='/s' element={<PersonalInfo/>}/>
      <Route path='/basicform' element={<BasicForm/>}/>
      <Route path="/final" element={<FinalPage/>}/>

        </Routes>
    </div>
  )
}

export default Routers

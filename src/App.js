import React from 'react'
import Nav from './Components/Nav'
import './App.css'
import Routers from './Routers'
import { ToastContainer } from 'react-toastify'
import Footer from './Components/Footer'
// import JoinUs from './Components/joinUs'

const App = () => {
  return (
    <>
    <div  className='body'>
      <Nav/>
      <Routers/>
    </div>
   {/* <JoinUs/><br /><br /> */}
      <Footer/>
<ToastContainer/>

    </>
  )
}

export default App

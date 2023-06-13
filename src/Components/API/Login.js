import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios'
import { useAuth } from "../Context/auth";


const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[auth, setAuth] = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async(e)=>{
    e.preventDefault()
    //  toast.success('Register Successfully')
    try{
      const res = await axios.post(`https://codeninja-1hav.onrender.com/login`, { email, password})

      if(res && res.data.success){
        toast.success("User Logined Successfully")
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate('/')
      }
      else{


        toast.error(res.data.message)
      }
    }catch(error){
        console.log(error)
        toast.error("Something went wrong")
    } 
  }



  return (
    <>
      <div className="form-container">
        <h2 className="registeration-heading">Login Form</h2>
       
      <form className="text-center" onSubmit={handleSubmit}> 
       
        {/* Email */}
        <div className="mb-3">
        
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter email id"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            required
          />
         
        </div>
        {/* Password */}
        <div className="mb-3">
          
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </div>
      <button type="submit" className="btn btn-primary">
          LOGIN
        </button>
      </form>
    </div>
    </>
  )
}

export default Login

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {toast} from 'react-toastify'
import axios from 'axios'

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async(e)=>{
    e.preventDefault()
    //  toast.success('Register Successfully')
    try{
      const res = await axios.post(`https://codeninja-1hav.onrender.com/register`, {name, email, password, phone, address})

      if(res.data.success){
        toast.success(res.data.message)
        navigate('/login')
      }
      else{
        toast.error(res.data.message)
      }
    }catch(error){
        console.log(error)
        toast.error("Something went wrong")
    }
  }
const navigate = useNavigate()

  return (
    <div className="form-container">
      <h2 className="registeration-heading">Registeration Form</h2>
      <form className="text-center" onSubmit={handleSubmit}>
        {/* Name */}
        <div className="mb-3">
          
          <input
            type="text"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Enter Your name"
            value={name}
            onChange={(e)=> setName(e.target.value)}
            required
          />
        </div>
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
            id="exampleInputPassword1"
            placeholder="Enter Password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            required
          />
        </div>

        {/* phone */}
        <div className="mb-3">
         
          <input
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Enter contact no"
            value={phone}
            onChange={(e)=> setPhone(e.target.value)}
            required maxLength={10} minLength={10}
          />
        </div>

        {/* Address */}
        <div className="mb-3">
          
        
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail2"
            placeholder="Enter address"
            value={address}
            onChange={(e)=> setAddress(e.target.value)}
          />
    
        </div>
     
        
        <button type="submit" className="btn btn-primary">
          REGISTER
        </button>
      </form> 
    </div>
  )
}

export default Register

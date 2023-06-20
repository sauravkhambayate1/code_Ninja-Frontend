
import React, { useState } from 'react';
import axios from 'axios'
//import Section1 from '../component/Section4'
import student from '../images/student.png'
import professional from '../images/professional.png'

import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';
var login;
var names;
function Navbar() {

  //register
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
  });
  const [centredModal, setCentredModal] = useState(false);
  const toggleShow = () => setCentredModal(!centredModal);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // login

  const [data1, setData1] = useState({ email: "", password: "", });
  const [loginform, setLoginform] = useState(false);
  const toggleShow1 = () => setLoginform(!loginform);

  const handlelogin = (e) => {
    setData1({ ...data1, [e.target.name]: e.target.value });
  };



  // username
  const [user, setUser] = useState(false)
  const handlelogout = () => {
    setUser(!user)
  }



  const handledata = () => {
    axios.post("https://ninjabackend.onrender.com/signup", data)
        .then((res) => { console.log(res) })
      .catch((err) => { console.log(err); })
    alert("Registeration complete sucessfully")
      

      
    
  }

  const handledata1 = (e) => {
    e.preventDefault()

    axios.post("https://ninjabackend.onrender.com/signin", data1)
      .then(async (res) => {
        console.log(res);
        names=res.data.name
        console.log(res.data.name);
        setUser(res.data.name)
        alert("login sucessfully")
        setCentredModal(!centredModal)
        setLoginform(!loginform);


      })
      .catch((err) => {
        console.log(err);

      })


  }
  const handleenroll = () => {
    window.scroll({ top: 3200 })
  }
  const handle = () => {
    window.scroll({ top: 3200 })

  }
const [nav,setNav]=useState(false)
const hello=()=>{
  setNav(!nav)

}

login=user;

  return (
    <>
      
     
       <li><img className='hlo' src='https://files.codingninjas.in/logo_variants-white-25005.png' alt='logo' width={"100px"} /></li>

       <input type='checkbox' id="boxx"  />
        <label className='label' htmlFor='boxx' onClick={hello}><i className="fa-solid fa-bars"></i></label>

      
      

      <div id='nav'>
        <ol >

          <li><img className='dis' src='https://files.codingninjas.in/logo_variants-white-25005.png' alt='logo' width={"100px"} /></li>
          <li className='hi' >Course <i className="fa-sharp fa-solid fa-caret-down"></i>
            <ol className='dropdown'>
              <li >
                <div style={{ textAlign: "left" }}>
                  <h3>What is your work experience?</h3>
                  <p>This will help us recommend the best programs for you.</p>
                </div>
                <div className='flex-container' >
                  <div onClick={handle} className='flex-container-hover' >
                    <img src={student} alt='student' />
                    <p className='p'>No work <br /> experience <i className="fa-solid fa-greater-than"></i></p>
                    <p>Designed as per college student schedule</p>
                  </div>
                  <div onClick={handle} className='flex-container-hover' >
                    <img src={professional} alt='student' />
                    <p className='p'>Having work <br /> experience <i className="fa-solid fa-greater-than"></i></p>
                    <p>Designed as per working professional schedule</p>


                  </div>
                </div>
              </li>


            </ol>


          </li>
          <li>Scholarship <span className='upto'>UP TO 100% OFF</span></li>
          <li>Community <i className="fa-sharp fa-solid fa-caret-down"></i></li>
          <li>Practise <i className="fa-sharp fa-solid fa-caret-down"></i>
            <ol className='drop'>
              <li >Coding Ninja Studio</li>
              <li>Contest</li>
              <li>Guided paths</li>   
              <li>Code Problems</li>
              <li>Interview experience</li>
              <li>Mock tests</li>
            </ol>
          </li>
          <li> <img src='https://files.codingninjas.in/careercamp-12614.svg ' alt='logo-camp' /></li>
          {console.log(user)}
          <li>{user ? <div><Link to={'/dashboard'}><span className='room'>My Class room</span></Link> &nbsp; <span className='span'><img src='https://files.codingninjas.com/gen-assets/Avtar.png' className='dashpic' alt='' /><div className='space'> <button onClick={handlelogout} className='btn-logout'>logout</button></div></span> </div>

            : <MDBBtn className='btn-Login' onClick={toggleShow}>login</MDBBtn>



          }</li>
          <li><button className='btn-register' onClick={handleenroll}>Register</button></li>

        </ol>


        <MDBModal tabIndex='100000' show={centredModal} setShow={setCentredModal}>
          <MDBModalDialog centered>
            <MDBModalContent>
              <MDBModalHeader >
                <MDBModalTitle style={{ color: "black" }}>REGISTER FORM</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <form onSubmit={handledata} className="text-center" >
                <MDBModalBody>
                  <div className="form-container">


                    {/* <label htmlFor="name">FirstName : </label> */}
                    <input
                      required
                      type="text"
                      id="name"
                      className="form-control"
                      value={data.name}
                      name="name"
                      onChange={handleChange}
                      placeholder="Enter your Name..."

                    />
                    <br></br>
                    {/* <label htmlFor="lname">Email : </label> */}
                    <input
                      required
                      type="text"
                      id="lname"
                      className="form-control"
                      value={data.email}
                      name="email"
                      onChange={handleChange}
                      placeholder="Enter your email..."
                    />
                    <br></br>
                    {/* <label htmlFor="email">Password : </label> */}
                    <input
                      required
                      type="password"
                      id="email"
                      className="form-control"
                      value={data.password}
                      name="password"
                      onChange={handleChange}
                      placeholder="Enter a password here!..."

                    />
                    <br></br>
                  
                    <input
                      required
                      type="text"
                      id="password"
                      className="form-control"
                      value={data.address}
                      name="address"
                      onChange={handleChange}
                      placeholder="Enter a Address?...."
                    />
                    <br></br>
                   
                    <input
                      required
                      type="number"
                      id="Mobile"
                      className="form-control"
                      value={data.phone}
                      name="phone"
                      onChange={handleChange}
                      placeholder="Enter a mobile number"
                    />
                    <br></br>

                    <br></br>
                    <div className="forms">
                      Already a customer <b className="hover"> <MDBBtn onClick={toggleShow1}>SignIn</MDBBtn></b>

                    </div>

                  </div>
                </MDBModalBody>
                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow}>
                    Close
                  </MDBBtn>
                  <MDBBtn className="submit" >submit</MDBBtn>
                </MDBModalFooter>
              </form>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>



        <MDBModal tabIndex='-10' show={loginform} setShow={setLoginform} >
          <MDBModalDialog centered>
            <MDBModalContent>
              <form >
                <MDBModalHeader>
                  <MDBModalTitle style={{ color: "black" }}>LOGIN FORM</MDBModalTitle>
                  <MDBBtn className='btn-close' color='none' onClick={toggleShow1}></MDBBtn>
                </MDBModalHeader>

                <MDBModalBody>
                  <div className="form-container">
                    {/* <label className='new-form' htmlFor="email1">Email  </label> <br></br> */}
                    <input className='new-form'
                      required
                      type="email"
                      id="email1"
                      value={data1.email}
                      name="email"
                    
                      onChange={handlelogin}
                      placeholder="enter a email here!..."
                    />
                    <br></br><br />
                    {/* <label className='new-form' htmlFor="password1">password  </label> <br></br> */}
                    <input className='new-form'
                      required
                      type="password"
                      id="password1"
                      value={data1.password}
                      name="password"
                      
                      onChange={handlelogin}
                      placeholder="password?..."
                    />

                    <br></br>

                    <br></br>


                  </div>


                </MDBModalBody>

                <MDBModalFooter>
                  <MDBBtn color='secondary' onClick={toggleShow1}>
                    Close
                  </MDBBtn>
                  <MDBBtn className="submit" onClick={handledata1}>submit</MDBBtn>
                </MDBModalFooter>
              </form>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </div>


    </>

  )
}
export default Navbar;
export {login,names};
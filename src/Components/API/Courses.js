import React from 'react'

export default function Course() {
  const msg="No work experience";
 
  
  
  return (
    <div id='course'>
        
        <div className='background' >
            <div className='.div'>
                <p><h2>Online Coding Courses</h2></p>
            <p className='div-text'>Most loved online coding courses for college students and working <br/>professionals</p>
            <button className='b-browse'>Browse for more course</button>
            <button className='b-try'>try for free</button>
            </div>
            <img className='picsss' src='https://files.codingninjas.in/courses-page-top-bg-11535.svg' alt=''/>

        </div>
        <img src='https://files.codingninjas.com/gsst-homepage_web-27881.svg' alt=''/>
    <div className='mac' style={{marginTop:"-200px"}}>



    <div className='section6-second' style={{marginTop:"200px"}}>
            <h3>Courses specially curated for</h3>
            <p>{msg.one}    <span  style={{color:"tomato"}}>Edit preference<i className="fa-sharp fa-light fa-clock"></i></span></p>
            <h4>Recommended courses for students</h4>
            <div className='section6-second-flex'>


                {/* {data.map((item,index)=>{
                    return (
                        <div keys={index}  className='section6-second-child' onClick={()=>handleFunc(item)}>
                       <div style={{marginLeft:"0px"}}>
                       <p>{item.title}</p>
                        <h4>{item.title2}</h4>
                        <img src={item.img} alt='' width={"50px"}/>
                       </div>
                       <p><i className="fa-light fa-clock"></i>{item.time} &nbsp; 
                       <img src='https://files.codingninjas.in/mdi_palette-swatch-19337.svg' alt='' width={"15px"}/> {item.problem}</p> 
                       <p>{item.ratings} <img src='https://files.codingninjas.in/4-8-stars-5588.png' alt='' width={"70px"}/> ({item.count})</p>

                        </div>
                    )
                })} */}


                  
            </div>
        </div>

    </div>

    
    <div style={{position:"relative",left:"-200px"}}>
    {/* <Footer/> */}
    </div>

    </div>
  )
}
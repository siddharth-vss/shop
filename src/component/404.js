import React from 'react'

import '../index.css'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate=useNavigate();
  return (
    <>
   


     
      <div className='error' >
      <div className="nav">
                    <button className="btn btn-primary" onClick={()=>navigate("/singin")}>
                                        <i class="fa-solid fa-right-to-bracket"></i>  &nbsp;  Sing in                    </button>
                    <button className="btn btn-primary" onClick={()=>navigate("/")}>
                                        <i class="fa-solid fa-right-to-bracket"></i>  &nbsp;  Sing up                    </button>
                </div>
    <br/><br/>
    <br/><br/>
<h1 className=" text-center h1e">404</h1>
<h3 className=" text-center h3e">NOT FOUND</h3>
<p className=" text-center pe">The Resource Requested is not Found</p>

      </div>
      
    </>
  )
}

export default Error

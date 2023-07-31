import React from 'react'

import '../index.css'
import Navbar from './navbar'
const Error = () => {
  return (
    <>
    <Navbar/>


     
      <div className='error' >
    <br/><br/>
    <br/>
    <br/><br/>
    <br/><br/>
<h1 className=" text-center h1">404</h1>
<h3 className=" text-center h3">NOT FOUND</h3>
<p className=" text-center p">THe Resource Requested is not Found</p>

      </div>
      
    </>
  )
}

export default Error

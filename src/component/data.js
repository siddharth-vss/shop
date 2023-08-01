import React, { useState,useEffect } from 'react'
import Navbar from './navbar'
import Disable from './dts'


const Data = (props) => {

 const[data,setData]=useState([])
 const itemseter =async () =>{
    
    const response = await fetch('http://localhost:5000/bill',{
      method:'Get'
    })
    const data = await response.json();
    setData(data);
    console.log(data);
  }
  useEffect( ()=>{
    itemseter();
    console.log(data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]); 
    return (
    <>
    <Navbar showAlert={props.showAlert}/>
    <br/><br/>
    <br/><br/>
    {data.map((cus,index)=>{
        return       <Disable
        id={cus._id}
        name={cus.name}
        number={cus.mobile_number}
        address={cus.address}
        City={cus.City}
        Zip={cus.Zip}
        biller={cus.biller}
        Payment={cus.Payment}
        Item={cus.Item}
        State={cus.State}
        quantity={cus.quantity}
        Price={cus.Price}
        Total={cus.Total}
        date={cus.date}
        
        
        
        
        /> 
    })

    }


    </>
  )
}

export default Data

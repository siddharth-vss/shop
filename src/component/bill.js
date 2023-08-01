import React, { useEffect, useState } from 'react'
import '../App.css'
import'../logo.jpg'
import { useNavigate  } from 'react-router-dom'
import Navbar from './navbar'


const Bill = (props) => {
  const navigate = useNavigate();
  const payment =[
    {"id":1,"payment_type":"Credit Card"},
    {"id":2,"payment_type":"Debit Card"},
    {"id":3,"payment_type":"Net Banking"},
    {"id":4,"payment_type":"Cash"},
    {"id":5,"payment_type":"Other"}
  ]
  const States = [
    { name: "Andhra Pradesh", value: "Andhra Pradesh" },
    { name: "Arunachal Pradesh", value: "Arunachal Pradesh" },
    { name: "Assam", value: "Assam" },
    { name: "Bihar", value: "Bihar" },
    { name: "Chhattisgarh", value: "Chhattisgarh" },
    { name: "Goa", value: "Goa" },
    { name: "Gujarat", value: "Gujarat" },
    { name: "Haryana", value: "Haryana" },
    { name: "Himachal Pradesh", value: "Himachal Pradesh" },
    { name: "Jharkhand", value: "Jharkhand" },
    { name: "Karnataka", value: "Karnataka" },
    { name: "Kerala", value: "Kerala" },
    { name: "Madhya Pradesh", value: "Madhya Pradesh" },
    { name: "Maharashtra", value: "Maharashtra" },
    { name: "Manipur", value: "Manipur" },
    { name: "Meghalaya", value: "Meghalaya" },
    { name: "Mizoram", value: "Mizoram" },
    { name: "Nagaland", value: "Nagaland" },
    { name: "Odisha", value: "Odisha" },
    { name: "Punjab", value: "Punjab" },
    { name: "Rajasthan", value: "Rajasthan" },
    { name: "Sikkim", value: "Sikkim" },
    { name: "Tamil Nadu", value: "Tamil Nadu" },
    { name: "Telangana", value: "Telangana" },
    { name: "Tripura", value: "Tripura" },
    { name: "Uttar Pradesh", value: "Uttar Pradesh" },
    { name: "Uttarakhand", value: "Uttarakhand" },
    { name: "West Bengal", value: "West Bengal" }
  ]

 const[form,setForm]= useState({})
 const[stock,setStock]= useState([])
 const[user,setUser]= useState([])

  const hendeler = (e) =>{
     console.log(e.target.name,e.target.value);
     setForm({...form,[e.target.name]: e.target.value})

  }
  
  const FormHandeler =async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/bill',{
      method:'POST',
      body : JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
    }})
    const data = await response.json();
    console.log(data);
    if(response.status===200){
      props.showAlert("Bill Created Successfully", "success");
    navigate("/journal");
    }else{
      props.showAlert("Enter Correct credintial", "danger");
    }
   
  }
  const itemseter =async () =>{
    
    const response = await fetch('http://localhost:5000/staf/item',{
      method:'Get'
    })
    const Stock = await response.json();
    setStock(Stock);
    console.log(Stock);
  }
  const userseter =async () =>{
    
    const response = await fetch('http://localhost:5000/users',{
      method:'Get'
    })
    const Stock = await response.json();
    setUser(Stock);
    console.log(Stock);
  }
  useEffect( ()=>{
    itemseter();
    userseter();
    console.log(stock);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
    <Navbar showAlert={props.showAlert}/> <br/><br/>
    <br/><br/>
      <div className="my-5" >
      <ul  className="select d-flex" name="Item" onChange={hendeler} >
        {stock.map((item,index) => {
                return <li key={item.Item}>&nbsp;&nbsp;&nbsp;{item.Item}, ₹{item.Price} .</li>
              })}
        </ul>
      </div>


    
    <form onSubmit={FormHandeler} className="row g-3 bg-light rounded-2 p-auto my-3 m-auto ">
  <div className="col-md-6">
    <input  onChange={hendeler} type="hidden" name="where?" value="shop sms"/>
    <label htmlFor="inputEmail4" className="form-label">Customer name</label>
    <input  onChange={hendeler} type="text" className="form-control" id="inputEmail4" name="name" required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputPassword4" className="form-label">mobile number</label>
    <input  onChange={hendeler} type="number" className="form-control" id="inputMobile" name="mobile_number" required/>
  </div>
  <div className="col-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input  onChange={hendeler} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" name="address" required/>
  </div>

  <div className="col-md-6">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input  onChange={hendeler} type="text" className="form-control" id="inputCity" name="City" />
  </div>
  <div className="col-md-4">
    <label htmlFor="inputState" className="form-label">State</label>
    
    <select  className="form-select select" name="State" onChange={hendeler} >
        <option  >select states</option>{States.map((e,index) => {
                return <option  defaultValue={e.value} key={index}>{e.name}</option>
              })}</select>
   
  </div>
  <div className="col-md-2">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input  onChange={hendeler} type="text" className="form-control" id="inputZip" name="Zip" required/>
  </div>
  
  <div className="col-md-6">
    <label htmlFor="inputZip" className="form-label">biller</label>
    <select  className="form-select select" name="Payment" onChange={hendeler} >
        <option  >select User</option>{user.map((e,index) => {
                return <option defaultValue={e.name} key={index}>{e.name}</option>
              })}</select>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputZip" className="form-label">biller Rnumber</label>
    <input  onChange={hendeler} type="password" className="form-control" id="inputrnum" name="billernum" required/>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputZip" className="form-label">Payment-method</label>
    <select  className="form-select select" name="Payment" onChange={hendeler} >
        <option  >select method</option>{payment.map((e,index) => {
                return <option defaultValue={e.payment_type} key={index}>{e.payment_type}</option>
              })}</select>
  </div>
  <div className="col-md-6">
    <label htmlFor="inputZip" className="form-label">Cuppon</label>
    <input  onChange={hendeler} type="text" className="form-control" id="input" name="cuppon"/>
  </div>
  
    <div className="row">
    <div className="col-md-6">
      <label htmlFor="inputEmail4" className="form-label">Item</label>
      <select  className="form-select select" name="Item" onChange={hendeler} >
        <option  >select Item</option>{stock.map((item,index) => {
                return <option defaultValue={item.Item}  key={index}>{item.Item}</option>
              })}
        </select>
</div>
<div className="col-md-3">
     <label htmlFor="inputPassword4" className="form-label">quantity</label>
     <input  onChange={hendeler} type="number" className="form-control" id="inputquantity"  name="quantity"/>
</div>
<div className="col-md-3">
     <label htmlFor="inputPassword4" className="form-label">Price</label>
     <select  className="form-select select" name="Price" onChange={hendeler} >
        <option  >select Price</option>{stock.map((item,index) => {
                return <option defaultValue={item.Price} key={index} >{item.Price}</option>
              })}
        </select>
</div>
</div>




  <button type="button" className="btn btn-success" id="add">
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus"
      viewBox="0 0 16 16">
      <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
      </path>
    </svg>
    Add more Item
  </button>

  <div className="col-12">
    <button type="submit" className="btn btn-primary">Submit</button>
  </div>
  <div className="col-md-12"></div>


</form>
   
    

    </>
  )
}

export default Bill

import React,{useEffect,useState} from 'react'
import '../App.css' 
import Navbar from './navbar'


const Stock = (props) => {
    
  const[stock,setStock]= useState([])
  const[form,setForm]= useState({})



  const hendeler = (e) =>{
    console.log(e.target.name,e.target.value);
    setForm({...form,[e.target.name]: e.target.value})

 }
 
 const FormHandeler =async (e) =>{
   e.preventDefault();
   const response = await fetch('http://localhost:5000/staf/stocks',{
     method:'POST',
     body : JSON.stringify(form),
     headers:{
       'Content-Type':'application/json'
   }})
   const data = await response.json();
   console.log(data);
   if(response.status===200){
    props.showAlert("Item Created Successfully", "success");
  
  }else{
    props.showAlert("Enter Correct credintial", "danger");
  }
   await itemseter();
   
 }

  const itemseter =async () =>{
    
    const response = await fetch('http://localhost:5000/staf/item',{
      method:'Get'
    })
    const Stock = await response.json();
    setStock(Stock);
    console.log(Stock);
  }
  useEffect( ()=>{
    itemseter();
    console.log(stock);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
 <>
 
<Navbar/>
  <br/><br/>
    <br/><br/>
    
       {stock.map((item,index) => {
         
         return     <div className="col" key={index}>
            <div className='date'>{item.date}</div>
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                      <h4 className="my-0 fw-normal incen"><b>{item.Item}</b></h4>
                      
                    </div>
                  
                  </div>
                </div>
                
              })}
   {/*
      
    <!-- else-->
      <div className="col">
        <div className="card mb-4 rounded-3 shadow-sm">
          <div className="card-header py-3">
            <h4 className="my-0 fw-normal incen"><b>No Record Found</b></h4>
          </div>
          
        </div>
      </div>
*/}
  <form onSubmit={FormHandeler}  className="row g-3 bg-light rounded-2 p-auto m-auto ">
    <div className="col-md-6">
      <input type="hidden" name="where?" value="shop sms" />
      <label htmlFor="inputEmail4" className="form-label">Item Name</label>
      <input type="text" className="form-control" id="inputEmail4" name="Item" onChange={hendeler} />
    </div>
    <div className="col-md-6">
      <label htmlFor="inputPassword4" className="form-label">Price</label>
      <input type="number" className="form-control" id="inputPassword4" name="Price" onChange={hendeler} />
    </div>
    
 
    <button type="submit" className="btn btn-success" id="add">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus"
        viewBox="0 0 16 16">
        <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
        </path>
      </svg>
      Add more Item
    </button>
  </form>
  
 </>
  )
}

export default Stock

import React,{useState} from 'react'
import logo from '../logo.jpg' ;
import '../index.css'
import { useNavigate } from 'react-router-dom';

const Singup = (props) => {
  const navigate = useNavigate();
  const[form,setForm]= useState({})
  
  const hendeler = (e) =>{
    console.log(e.target.name,e.target.value);
    setForm({...form,[e.target.name]: e.target.value})
    
  }
  const FormHandeler =async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/singup',{
      method:'POST',
      body : JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }})
      const data = await response.json();
      console.log(data);
      if(response.status===200){
        props.showAlert("Account Created Successfully", "success");
      navigate("/singin");
      }else{
        props.showAlert("Enter Correct credintial", "danger");
      }
  }
  return (
    <>
    <form  onSubmit={FormHandeler} className='mt-5'>
    <div className='text-center mt-5'>

    <img src={logo} alt="logo" id='SPlog'  />
    <h1 className="h3 mb-3 fw-normal">Please create Account</h1>
    </div>

    <div className="form-floating ">
      <input type="text"  onChange={hendeler} name='name' className="form-control input" id="floatingNInput" placeholder="name@example.com"  />
      <label  className='input' htmlFor="floatingInput">User name</label>
    </div>
    <div className="form-floating ">
      <input type="email"  onChange={hendeler} name='email' className="form-control input" id="floatingInput" placeholder="name@example.com"  />
      <label  className='input' htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating ">
      <input type="text"  onChange={hendeler} name='number' className="form-control input" id="Inputnumber" placeholder="name@example.com"  />
      <label  className='input' htmlFor="floatingInput">Number</label>
    </div>
    <div className="form-floating">
      <input type="password" onChange={hendeler} name='password' className="form-control input" id="floatingPassword" placeholder="Password" />
      <label htmlFor="floatingPassword">Password</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control input" id="floatingcPassword" placeholder="confirm Password" required/>
      <label htmlFor="floatingPassword">Confirm Password</label>
    </div>

    <div className="form-check text-center my-1">
<a className='ftext' href='/singin'>Have you account?</a>
    </div>
    <div className='text-center'>
    <button  className="btn btn-primary   py-2 form-floating" type="submit">Sign up</button>
    <p className="mt-3 mb-3 text-body-secondary">© 2017–2023</p></div>
  </form>
  

 
    </>
  )
}

export default Singup

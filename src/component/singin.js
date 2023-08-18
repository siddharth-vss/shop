import React,{useState} from 'react'
import logo from '../logo.jpg';
import { useNavigate } from 'react-router-dom';
import '../index.css'
const Login = (props) => {
  const navigate = useNavigate();
  const[form,setForm]= useState({})

  const hendeler = (e) =>{
    console.log(e.target.name,e.target.value);
    setForm({...form,[e.target.name]: e.target.value})
    
  }
  const FormHandeler =async (e) =>{
    e.preventDefault();
    const response = await fetch('http://localhost:5000/singin',{
      method:'POST',
      body : JSON.stringify(form),
      headers:{
        'Content-Type':'application/json'
      }})
      const data = await response.json();
      console.log(data);
      if(response.status===200){
        document.cookie = `jwt=${data}`;
        props.showAlert("Loged in Successfully", "success");
      navigate("/bill");
      
      }else{
        props.showAlert("Enter Correct credintial", "danger");
      }
    }

  return (
   <>

   <form onSubmit={FormHandeler}>
    <div className='text-center mt-5'>

    <img src={logo} alt="logo" id='SPlog'  />
    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
    </div>

    <div className="form-floating ">
      <input type="email" className="form-control input" id="floatingInput" onChange={hendeler} placeholder="name@example.com" name='email'/>
      <label  className='input' htmlFor="floatingInput">Email address</label>
    </div>
    <div className="form-floating">
      <input type="password" className="form-control input" id="floatingPassword" onChange={hendeler} placeholder="password" name='password'/>
      <label htmlFor="floatingPassword">Password</label>
    </div>

    <div className="form-check text-center my-1">
      <a className='ftext' href='/contact'>Forgot password ?</a> <a className='ftext' href='/'>Register?</a>
    </div>
    <div className='text-center'>
    <button className="btn btn-primary  py-2 form-floating" type="submit">Sign in</button>
    <p className="mt-3 mb-3 text-body-secondary">© 2017–2023</p></div>
  </form>

   </>
  )
}

export default Login

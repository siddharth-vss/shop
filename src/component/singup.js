import React, { useState } from 'react'
import logo from '../logo.jpg';
import '../index.css'
import { useNavigate } from 'react-router-dom';

const Singup = (props) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({})

  const hendeler = (e) => {
    console.log(e.target.name, e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value })

  }

  const cpass = document.getElementById("cpassword");
  const pass = document.getElementById("password");


  // const pass = document.querySelector('#password');
  // const cpass = document.querySelector('#cpassword');


  const toggel = (x) => {

   
    // if (x.type === "text") {
    //   x.type = "password";
    // } else {
    //   x.type = "text";
    // }
    if (x.getAttribute("type") === "password") {
      x.setAttribute("type", "text");

    } else {
      x.setAttribute("type", 'password');

    }

  }

  const FormHandeler = async (e) => {
    e.preventDefault();
    const response = await fetch('/singup', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      props.showAlert("Account Created Successfully", "success");
      navigate("/singin");
    } else {
      props.showAlert("Enter Correct credintial", "danger");
    }
  }
  return (
    <>
      <form onSubmit={FormHandeler} className='mt-5'>
        <div className='text-center mt-5'>

          <img src={logo} alt="logo" id='SPlog' />
          <h1 className="h3 mb-3 fw-normal">Please create Account</h1>
        </div>

        <div className="form-floating ">
          <input type="text" onChange={hendeler} name='name' className="form-control input" id="floatingNInput" placeholder="name@example.com" />
          <label className='input' htmlFor="floatingInput">User name</label>
        </div>
        <div className="form-floating  my-3">
          <input type="email" onChange={hendeler} name='email' className="form-control input" id="floatingInput" placeholder="name@example.com" />
          <label className='input' htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating  my-3">
          <input type="text" onChange={hendeler} name='number' className="form-control input" id="numberInput" placeholder="name@example.com" />
          <label className='input' htmlFor="floatingInput">Number</label>
        </div>
        <div className="form-floating d-flex my-3 rp">
          <input type="password" onChange={hendeler} name='password' className="form-control input" id="password" placeholder="Password" />
          <input type="checkbox" className='pass' onClick={() => { toggel(pass) }} />
          <label htmlFor="floatingPassword">Password</label>
          {/* <sp onClick={show} className='btn input btw' ><i  className="fa-solid fa-eye" id='passe'></i></sp> */}
        </div>
        <div className="form-floating d-flex rp">
          <input type="password" onChange={hendeler} className="form-control input" id="cpassword" name='cpass' placeholder="confirm Password" />
          <input type="checkbox" className='cpass' onClick={() => { toggel(cpass) }} />
          <label htmlFor="floatingPassword">Confirm Password</label>


          {/* <div className="form-check form-switch">
          <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            </div> */}

          {/* <sp className="btn input btw" onClick={cshow} ><i  className="fa-solid fa-eye" id='cpasse'></i></sp> */}
        </div>

        <div className="form-check text-center my-1">
          <a className='ftext' href='/singin'>Have you account?</a>
        </div>
        <div className='text-center'>
          <button className="btn btn-primary   py-2 form-floating" type="submit">Sign up</button>
          <p className="mt-3 mb-3 text-body-secondary">© 2017–2023</p></div>
      </form>



    </>
  )
}

export default Singup

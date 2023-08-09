import React from 'react';
import logo from '../logo.jpg'
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Navbar = (props) => {
    const nevigation =useNavigate();

  const logout = async () => {
      nevigation("/");
      
  }
    
  return (
   <>
   <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <img src={logo} alt="sp" id="SPlogo"/>
            <a className="navbar-brand" href="/">SHOP</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/invoice"><i className="fa-solid fa-file-invoice" style={{color: "#ffffff"}}></i>&nbsp;INVOICE</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/journal"><i className="fa-solid fa-book" style={{color: "#ffffff"}}></i>&nbsp;JOURNAL</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/bill"><i className="fa-solid fa-house" style={{color: "#ffffff"}}></i>&nbsp;HOME</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/stocks"> <i className=" fa-solid fa-layer-group" style={{color: "#ffffff"}} ></i>&nbsp;STOCKS</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/contact"> <i className="fa-solid fa-envelope"style={{color: "#ffffff"}}></i>&nbsp;CONTACT-US</a>
                        </li>
                        
                    </ul>
                    <form className="d-flex mt-3" onSubmit={logout} role="search">
                        
                        <button className="btn btn-primary" type="submit">Log-out</button>
                    </form>
                </div>
            </div>
        </div>
    </nav>
  
   </>
  ) 
}

export default Navbar

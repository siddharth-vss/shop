import React from 'react';
import logo from '../logo.jpg'
import '../App.css'
import { Link,useNavigate } from 'react-router-dom';


const Navbar = (props) => {
    const nevigation =useNavigate();

    function deleteCookies() {
        let Cookies = document.cookie.split(';');
       
        // set 1 Jan, 1970 expiry for every cookies
        for (var i = 0; i < Cookies.length; i++)
        document.cookie = Cookies[i] + "=;expires=" + new Date(0).toUTCString();
        
     }
    
  const logout = async () => {

      nevigation("/");
      deleteCookies();
  }
    
  return (
   <>
   <nav className="navbar navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
            <img src={logo} alt="sp" id="SPlogo"/>
            <Link className="navbar-brand" to="/">SHOP</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">MENU</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/invoice"><i className="fa-solid fa-file-invoice" style={{color: "#ffffff"}}></i>&nbsp;INVOICE</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/journal"><i className="fa-solid fa-book" style={{color: "#ffffff"}}></i>&nbsp;JOURNAL</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bill"><i className="fa-solid fa-house" style={{color: "#ffffff"}}></i>&nbsp;HOME</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/stocks"> <i className=" fa-solid fa-layer-group" style={{color: "#ffffff"}} ></i>&nbsp;STOCKS</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact"> <i className="fa-solid fa-envelope"style={{color: "#ffffff"}}></i>&nbsp;CONTACT-US</Link>
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

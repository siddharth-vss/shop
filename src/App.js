
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Singup from './component/singup';
import Login from './component/singin';
import Journal from './component/journal';
import Bill from './component/bill';
import Stock from './component/stock';
import Invoice from './component/invoice';
import Error from './component/404';
import Contact from './component/contact';
import Data from './component/data';

import { useState } from 'react';
import Alert from './component/alert';




function App() {


  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 2000); 
  }
  return (
    <>
    
    
    
   
    
    
    
    
     <BrowserRouter>
     <Alert alert={alert}/>
      <Routes>
         {/* <Route path="/" element={ <Navbar/>}/> */}
          <Route path='/' element={<Singup  showAlert={showAlert}/>} />
          <Route path="singin" element={<Login  showAlert={showAlert}/>} />
          <Route path="journal" element={<Journal  showAlert={showAlert}/>} />
          <Route path="stocks" element={<Stock  showAlert={showAlert}/>} />
          <Route path="bill" element={<Bill  showAlert={showAlert}/>} />
          <Route path="invoice" element={<Invoice/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="prints" element={<Data/>} />
          <Route path="*" element={<Error/>} />
      
      </Routes>
    </BrowserRouter> 
       
    </>
  );
}

export default App;

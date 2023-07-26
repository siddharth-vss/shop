import React, { useState } from 'react'
import '../App.css'
import logo from '../logo.jpg'
function Bill() {


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


  const [name, setName] = useState('');
  // const [biller, setBiller] = useState('');
  const [mobile_number, setMobile_number] = useState('');
  const [address, setAddress] = useState('');
  const [City, setCity] = useState('');
  // const [State, setState] = useState('');
  const [Zip, setZip] = useState('');
  const [Item, setItem] = useState('');
  const [quantity, setQuantity] = useState('');
  const [Price, setPrice] = useState('');
  const [invoice, setInvoice] = useState('');
  const [Payment, setPayment] = useState('');
  // const [Total, setTotal] = useState('');

  const sName = (e) => { setName(e.target.value); };
  //  const sbiller               =(e)=>{setBiller         (e.target.value);};
  const sMobile_number = (e) => { setMobile_number(e.target.value); };
  const sAddress = (e) => { setAddress(e.target.value); };
  const sCity = (e) => { setCity(e.target.value); };
  //  const sState              =(e)=>{setState        (e.target.value);};
  const sZip = (e) => { setZip(e.target.value); };
  const sItem = (e) => { setItem(e.target.value); };
  const sQuantity = (e) => { setQuantity(e.target.value); };
  const sPrice = (e) => { setPrice(e.target.value); };
  const sInvoice = (e) => { setInvoice(e.target.value); };
  const sPayment = (e) => { setPayment(e.target.value); };
  //  const sTotal =(e)=>{setTotal()}




  return (
    <>
      <div className="app">
        <h1 className="tot invoice">
          Invoice Generator
        </h1>
        <div className="invoice-wrapper">
          <div className="d-flex justify-content-around">
            <div className="d1">
              <img src={logo} alt="logo" id='SP' />
              <div className=" my-3 ">

                <p className="input "  >ABC </p>
                <p className="input "  >XYZ </p>
                <p className="input "  >XYZ </p>
                <p className="input "  >XYZ </p>

              </div>
            </div>
            <div className="d2">
              <p className="input  invoice invoiceheader text-end"   >INVOICE</p>
            </div>

          </div>
          <div className="d-flex justify-content-around my-3 ">
            <div className="d1">



              <p className='invoice'>Bill To:</p>
              <input type="text" className="input " name={name} onChange={sName} placeholder="Your Company" />
              <input type="number" className="input " name={mobile_number} onChange={sMobile_number} placeholder="Your Name" />
              <input type="text" className="input " name={address} onChange={sAddress} placeholder="Company's Address" />
              <input type="text" className="input " name={City} onChange={sCity} placeholder="City, State Zip" />
              {/* <input type="text" className="input " name={State} onChange={sState} placeholder="City, State Zip" /> */}
              <select className='select'>{States.map((e) => {
                return <option value={e.value}>{e.name}</option>
              })}</select>
            </div>
            <div className="d2 d-flex">
              <div className="dd1">
                <p className="invoice">Invoice#:</p>
                <p className="invoice">Invoice Date:</p>
                <p className="invoice">ZIP Code:</p>
                <p className="invoice">Payment-method:</p>
              </div>
              <div className="dd2">
                <input type="text" name={invoice} className="input io" onChange={sInvoice} />
                <input type="date" name="date" className="input io" />
                <input type="number" name={Zip} className="input io" onChange={sZip} />
                <input type="text" name={Payment} className="input io" onChange={sPayment} />

              </div>

            </div>

          </div>
          <div className="item d-flex ">

            <div className="st "> Item Description </div>
            <div className="nd ">Qty</div>
            <div className="rd ">Rate</div>
            <div className="th ">Amount</div>




          </div>
          <div className="bg border-bottom d-flex ">

            <input type='text' className="st input border-end" name={Item} onChange={sItem} />
            <input type='number' className="nd input border-end" name={quantity} onChange={sQuantity} />
            <input type='number' className="rd input border-end" name={Price} onChange={sPrice} />
            <p type='text' className="th input" name="Total"  > <span></span> </p>



          </div>
          <div className="bg border-bottom d-flex ">

            <input type='text' className="st input border-end" name={Item} onChange={sItem} />
            <input type='number' className="nd input border-end" name={quantity} onChange={sQuantity} />
            <input type='number' className="rd input border-end" name={Price} onChange={sPrice} />
            <p type='text' className="th input" name="Total"  > <span></span> </p>



          </div>
          <div className="bg border-bottom d-flex ">

            <input type='text' className="st input border-end" name={Item} onChange={sItem} />
            <input type='number' className="nd input border-end" name={quantity} onChange={sQuantity} />
            <input type='number' className="rd input border-end" name={Price} onChange={sPrice} />
            <p type='text' className="th input" name="Total"  > <span></span> </p>



          </div>
          <div className="my-5 d-flex ">

            <div className="dd1">

            </div>
            <div className="dd2">
              <div className="d-flex">
                <div className="view w-50 p">
                  <input type="text" className="input " placeholder="" value="Sub Total" /></div>
                <div className="view w-50 p"><span className="span right bold dark tot input">200.00</span></div>
              </div>
              <div className="d-flex">
                <div className="view w-50 p">
                  <input type="text" className="input " placeholder="" value="Sale Tax (10%)" /></div>
                <div className="view w-50 p"><span className="span right bold dark tot input">20.00</span></div>
              </div>
              <div className="d-flex bg-gray p">
                <div className="view w-50 bgtot p">
                  <p className="input bold" >TOTAL</p></div>
                <div className="view w-50 p d-flex bgtot">

                  <span className="span right bold dark tot input">220.00</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </>
  );
}

export default Bill;

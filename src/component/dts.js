import React from 'react'
// import { useState } from 'react';
import '../App.css'
const Disable = (props) => {
    // let [total,setTotal]= useState('');
    let { id, name,Item, quantity, Price,Total } = props
    
  
    console.log(Item);
    console.log(quantity);
    console.log(Price);
    console.log(Total);

    return (
        <>
            <div className="accordion-item bor my-5">
                <h2 className="accordion-header bg-warning text-center">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="true" aria-controls={id}>
                        {name}
                    </button>
                </h2>
                <div id={id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">


                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="row">Items</th>
                                    {
                                        Item.map((item, index) => {
                                            return <td className='text-center'>{item}</td>

                                        })
                                    }
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Quantity</th>
                                    {
                                        quantity.map((item, index) => {
                                            return <td className='text-center'>{item}</td>

                                        })
                                    }
                                </tr>
                                <tr>
                                    <th scope="row">Price</th>
                                    {
                                        Price.map((item, index) => {
                                            return <td className='text-center'>₹{item}</td>

                                        })
                                    }


                                    
                                </tr>
                               <tr>
                                <th scope="row">Total</th> 
                                {/* {
                                        Total.map((total, index) => {
                                            return */}
                                             <td className='text-center'>₹{Total}</td>
{/* 
                                    })
                                 } */}
                               </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Disable

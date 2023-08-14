import React from 'react'
import { useState } from 'react';

const Disable = (props) => {
    let [total,setTotal]= useState('');
    let { id, name,Item, quantity, Price } = props
    
    for (let i = 0; i < Item.length; i++) {
        
        console.log(Price[i]*quantity[i]);
        setTotal(Price[i]*quantity[i]);
    }
    console.log(Item);
    console.log(quantity);
    console.log(Price);
    return (
        <>
            <div class="accordion-item">
                <h2 class="accordion-header bg-warning text-center">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${id}`} aria-expanded="false" aria-controls={id}>
                        {name}
                    </button>
                </h2>
                <div id={id} class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div class="accordion-body">


                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="row">Items</th>
                                    {
                                        Item.map((item, index) => {
                                            return <td className='text-center'>{item}</td>

                                        })
                                    }
                                    <td>Total</td>
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
                                {
                                        total.map((item, index) => {
                                            return <td className='text-center'>{item}</td>

                                        })
                                    }
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

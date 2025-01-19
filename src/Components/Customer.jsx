import React from 'react'
import './Customer.css'
const Customer = () => {
  return (
    <>
    <div className='cus'>
    <h2 className='glo'>Global customer footprint</h2>
    <h3 className='pow'>Powering 250+ businesses worldwide</h3>
    <img 
                src="/../../src/assets/World-Map-1.png" 
                alt="Responsive" 
                className="img-fluid rounded"
            />
            <a href='view.jsx'>View All Our Customers -></a>
    </div>
    </>
  )
}

export default Customer
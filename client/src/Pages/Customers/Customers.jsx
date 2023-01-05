import React from 'react'
import "./customers.css"
import Pagetop from '../../components/Pagetop'
import Customerstable from '../../Tables/Customerstable' 
const Customers = () => {
  return (
    <div className='customer__container'>
      {/* This is  the top of the page with containes the name of the page and the link to the appropriate page */}
      <Pagetop path='create' className='customer__top' title = 'Customers' link_name ='New Customer'/>
      <div className="customer__bottom">
        <Customerstable/>
      </div>
    </div>
  )
}

export default Customers
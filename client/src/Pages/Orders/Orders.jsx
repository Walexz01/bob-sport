import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Pagetop from '../../components/Pagetop'
import '../Orders/orders.css'

const Orders = () => {
  return (
    <div className='order__container'>
      {/* This is  the top of the page with containes the name of the page and the link to the appropriate page */}
      <Pagetop path='' className='order__top' title = 'Orders' link_name ='New Orders'/>
      <div className="order__links--container">
        <div className="order__links--list">
          <NavLink to='all-orders'>ALL</NavLink>
          <NavLink to='pending-orders'>complete</NavLink>
          <NavLink to='completed-order'>Pending</NavLink>
          <NavLink to='canceled-order'>Cancel</NavLink>
        </div>
      </div>
      <Outlet/>
    </div>
  )
}

export default Orders
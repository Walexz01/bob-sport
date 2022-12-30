import React from 'react'
import { useState } from 'react'

const Newcustomer = () => {
  const [customer, setCustomer] = useState({name:'',address:''})
  const handleAddress = (e)=>{
    setCustomer({...customer, address:e.target.value})
  }
  const handleName = (e)=>{
    setCustomer({...customer, name:e.target.value})
  }
  return (
    <div className='create__customer--container'>
      <form className='create__customer--form'>
        <input name='name' value={customer.name} onChange={handleName} type="text" placeholder='Enter Customer Name'/>
        <input name='address' type="text"  value={customer.address} onChange={handleAddress} placeholder='Enter Customer Address'/>
        <button type="submit">Add customer</button>
      </form>
      
    </div>
  )
}

export default Newcustomer
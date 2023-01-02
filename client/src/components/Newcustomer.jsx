import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Newcustomer = () => {
  const navigate = useNavigate()
  const [customer, setCustomer] = useState({name:'',address:''})

  const handleAddress = (e)=>{
    setCustomer({...customer, address:e.target.value})
  }

  const handleName = (e)=>{
    setCustomer({...customer, name:e.target.value})
  }
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/customers`,customer)
      setCustomer({name:'',address:''})
      navigate('/customers')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='create__customer--container'>
      <form className='create__customer--form' onSubmit={handleSubmit}>
        <h2 className="form__top">Create customer</h2>
        <div className="input__group">
          <span>Customer Name</span>
          <input name='name' value={customer.name} onChange={handleName} type="text" placeholder='Enter Customer Name' required/>
        </div>
        <div className="input__group">
          <span>Address</span>
          <input name='address' type="text"  value={customer.address} onChange={handleAddress} placeholder='Enter Customer Address' required/>
        </div>

        <button type='submit'>Add customer</button>
      </form>
      
    </div>
  )
}

export default Newcustomer
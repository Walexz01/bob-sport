import React from 'react'
import "./customers.css"
import Tablecontainer from '../../UI/Tablecontainer'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import Pagetop from '../../components/Pagetop'
import Customerbody from '../../components/Customerbody'
import { useEffect } from 'react'
import axios from 'axios'


const Customers = () => {
  const [input, setInput] = useState('');
  const [customerList, setcustomerList] = useState([])

    useEffect(() => {
        async function getAllCustomers(){
          try {
              const result = await axios.get('http://localhost:3000/api/customers')
                setcustomerList(result.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        getAllCustomers()
    }, [])

    const handleInput= (e)=>{
      setInput(e.target.value)
    }
  
  
  return (
    <div className='customer__container'>
      {/* This is  the top of the page with containes the name of the page and the link to the appropriate page */}
      <Pagetop path='create' className='customer__top' title = 'Customers' link_name ='New Customer'/>

      <div className="customer__bottom">
        <Tablecontainer className='customer__table__container'>
          <div className="customer__table__container--top">
            <div className="input__group">
              <BiSearch/>
              <input type="search" name='search' value={input} onChange={handleInput} placeholder='Search....' />
            </div>
            <div className="icon__filter"> filter icon</div>
          </div>
          <table className='customer__table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Registration Date</th>
                <th>Registration Time</th>
                <th> </th>
              </tr>
            </thead>
            <Customerbody customerList={customerList} input={input}/>
          </table>
        </Tablecontainer>
      </div>
    </div>
  )
}

export default Customers
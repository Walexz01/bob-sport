import React from 'react'
import Customerbody from '../components/Customerbody'
import { useEffect } from 'react'
import axios from 'axios'
import Tablecontainer from '../UI/Tablecontainer'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'
import Pagination from '../Utility/Pagination'


const Customerstable = () => {
  //  this is the state the manage the user inputs
    const [input, setInput] = useState('');
    // this is the state that store the customer list gotten from the  server
    const [customerList, setcustomerList] = useState([])
    //  this is the state that hold the current page of the user 
    const [currentPage, setCurrentPage] = useState(1)

  
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
  //  this is the function which handel the onchange event on the input
      const handleInput= (e)=>{
        setInput(e.target.value)
      }
//  this store the filtered customerList based on thr user input
      const filtered = customerList.filter(customers => {
        if (input === '') {
        return customers;
        } else if ( customers.customer_name.toLowerCase().includes(input.toLowerCase()) || customers.id === Number(input)) {
        return customers;
        }else{
            return ''
        }
      })

      // this is used to store the length of the fiiltered list of customers
      const count = filtered.length
      // tthis is the number of that to be diplayed per page
      const pageSize  = 15
    const slicedCustomer = filtered.slice(currentPage * pageSize - pageSize , currentPage * pageSize   )
  return (
    <>
        <Tablecontainer className='customer__table__container'>
          <div className="customer__table__container--top">
            <div className="input__group">
              <BiSearch/>
              <input type="search" name='search' value={input} onChange={handleInput} placeholder='Search....' />
            </div>
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
            <Customerbody customerList={slicedCustomer} input={input}/>
          </table>
          <Pagination count={count} pageSize={pageSize} setCurrentPage={setCurrentPage} currentPage={currentPage} />
        </Tablecontainer>
    </>
  )
}

export default Customerstable
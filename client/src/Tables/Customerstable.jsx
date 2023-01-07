import React from 'react'
import Customerbody from '../components/Customerbody'
import { useEffect } from 'react'
import axios from 'axios'
import Tablecontainer from '../UI/Tablecontainer'
import { useState } from 'react'
import Pagination from '../Utility/Pagination'
import Searchinput from '../Utility/Searchinput'

import { filterItems } from '../Utility/Filterfunc'
import { sliceData } from '../Utility/sliceDataFunc'

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
// this is a fuction that filters the list of the customersbased on the input and return an array of objects
    const filtered = filterItems(customerList,input)

      // this is used to store the length of the fiiltered list of customers
      const count = filtered.length
      // tthis is the number of that to be diplayed per page
      const pageSize  = 15
      // this is a fuction that can be found the util folder itt takes in the filtered object and return a sliced array of object base on the result length vs pageSize 
    const slicedCustomer = sliceData(filtered,currentPage,pageSize)
  return (
    <>
        <Tablecontainer className='customer__table__container'>
          <div className="search__input__container">
            <Searchinput input={input} handleInput={handleInput}/>
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
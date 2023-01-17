import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Paymentstablebody from '../components/Paymentstablebody'
import Tablecontainer from '../UI/Tablecontainer'
import Pagination from '../Utility/Pagination'
import Searchinput from '../Utility/Searchinput'
import { filterItems } from '../Utility/Filterfunc'
import { sliceData } from '../Utility/sliceDataFunc'


const Paymenttable = () => {
  // this stores the the list of payments fetch from the database
  const [paymentList, setPaymentList] = useState([])
  // this stores the input 
  const [input, setinput] = useState('')
  // this is used to store the current page that a user is on
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
     async function getPaymentLists() {
      const result = await axios.get('http://localhost:3000/api/payments')
      setPaymentList(result.data)
          
      }
      getPaymentLists()
  }, [])
  
  // this is the fuction used to update the state of the input to the current value of the input element
    const handleInput = (e)=>{
      setinput(e.target.value)
    }
    // this is the variable used to store the valuue returned from the filter object fuction
    const filtered = filterItems(paymentList,input,'customer_name','id','order_id')
// this is the total number of list that can be display per pages
    const pageSize = 20;
    //  this is the length of the filtered data
    const count = filtered.length;
    // this is the element that is filter based on the current page and pageSize
  const slicedPayments = sliceData(filtered,currentPage,pageSize)
  return (
    <>
        <Tablecontainer className ='payments__table__conatiner'>
          <div className="search__input__container">
            <Searchinput input={input}  handleInput={handleInput}/>
          </div>
          <table className='payments__table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Order Id</th>
                <th>Customer Name</th>
                <th>Amount Paid</th>
                <th>Order Status</th>
                <th>Seller Name</th>
                <th>Payment Date</th>
                <th>Payment Method</th>
              </tr>
            </thead>
            <Paymentstablebody paymentList={slicedPayments}/>
          </table>
          <Pagination setCurrentPage={setCurrentPage} pageSize={pageSize} count={count} currentPage={currentPage} />
        </Tablecontainer>
    </>
  )
}

export default Paymenttable
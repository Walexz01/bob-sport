import React from 'react'
import Salestablebody from '../components/Salestablebody'
import Tablecontainer from '../UI/Tablecontainer'
import { useState } from 'react'
import Searchinput from '../Utility/Searchinput'
import { filterItems } from '../Utility/Filterfunc'
import Pagination from '../Utility/Pagination'

import { sliceData } from '../Utility/sliceDataFunc'

const Salestable = ({salesList}) => {
    const [input, setInput] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    
    const handleInput = (e)=>{
        setInput(e.target.value)
      }
    
      

    const filtered = filterItems(salesList, input,'product_name','order_id','product_id')
    const count = filtered.length
    const pageSize = 30
    const slicedSales = sliceData(filtered,currentPage, pageSize)

  return (
    <>
    <Tablecontainer className='sales__table__conatiner'>
          <div className="search__input__container">
            <Searchinput input={input}  handleInput={handleInput}/>
          </div>
          <table className='sales__table'>
            <thead>
              <tr>
                <th>Order id</th>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th>Total Price</th>
                <th>Order Date</th>
                <th>Order Time</th>
              </tr>
            </thead>
            <Salestablebody salesList={slicedSales}/>
          </table>
          <Pagination count={count} pageSize={pageSize}  currentPage= {currentPage} setCurrentPage={setCurrentPage} />
      </Tablecontainer>
        
    </>
  )
}

export default Salestable
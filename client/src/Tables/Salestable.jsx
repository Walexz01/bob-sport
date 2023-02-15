import React from 'react'
import Salestablebody from '../components/Salestablebody'
import Tablecontainer from '../UI/Tablecontainer'
import { useState } from 'react'
import Searchinput from '../Utility/Searchinput'
import { filterItems } from '../Utility/Filterfunc'
import Pagination from '../Utility/Pagination'
import {BsChevronDown} from 'react-icons/bs'
import {BsChevronUp} from 'react-icons/bs'

import { sliceData } from '../Utility/sliceDataFunc'

const Salestable = ({salesList}) => {
  
    const [input, setInput] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [sortById, setsortById] = useState(false)
    const [sortByPrice, setsortByPrice] = useState(false)

    const handleInput = (e)=>{
        setInput(e.target.value)
      }
    
      if(sortById){
        salesList = salesList.sort((a,b)=> b.order_id - a.order_id)
      }else if(sortByPrice){
        salesList = salesList.sort((a,b)=> b.total_price - a.total_price)
      }else{
        salesList = salesList.sort((a,b)=> a.order_id - b.order_id)
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
                <th className="clickablehead" onClick={()=> {setsortById(prev => !prev)
                setsortByPrice(false)
                } }>Order id { sortById ? <BsChevronUp /> : <BsChevronDown/> } </th>
                <th >Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Unit Price</th>
                <th className="clickablehead" onClick={()=> {setsortByPrice(prev => !prev)
                setsortById(false)
                } } >Total Price { sortByPrice ? <BsChevronUp /> : <BsChevronDown/>  }</th>
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
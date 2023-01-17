import React from 'react'
import Salestablebody from '../components/Salestablebody'
import Tablecontainer from '../UI/Tablecontainer'
import { useState } from 'react'
import Searchinput from '../Utility/Searchinput'
import { filterItems } from '../Utility/Filterfunc'
import Pagination from '../Utility/Pagination'
import { sliceData } from '../Utility/sliceDataFunc'

const Salestable = () => {

    const [input, setInput] = useState('')

    const [currentPage, setCurrentPage] = useState(1)
    const handleInput = (e)=>{
        setInput(e.target.value)
      }
      const salesList = [
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "shoe",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "racket",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "egg",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "Ball",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "Ball",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "Ball",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
        {
          "Order_id": 1,
          "Product_Id": 12,
          "Product_Name": "Ball",
          "Quantity": 10,
          "Unit_Price": 33,
        "Order_Date": 7787667766
        },
      ]
    const filtered = filterItems(salesList, input,'Product_Name','Order_id','Product_Id')
    const count = filtered.length
    const pageSize = 3
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
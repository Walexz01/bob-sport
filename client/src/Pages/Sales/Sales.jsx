import React from 'react'
import { useState } from 'react'
import Pagetop from '../../components/Pagetop'
import Salestablebody from '../../components/Salestablebody'
import Tablecontainer from '../../UI/Tablecontainer'
import Searchinput from '../../Utility/Searchinput'
import "./sales.css"

const Sales = () => {
  const [input, setInput] = useState('')
  const salesList = [
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
  const handleInput = (e)=>{
    setInput(e.target.value)
  }
  return (
    <div className='sales__page__container'>
      <Pagetop title='All Sales' className='salees__page' />
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
            <Salestablebody salesList={salesList}/>
          </table>
      </Tablecontainer>

    </div>
  )
}

export default Sales
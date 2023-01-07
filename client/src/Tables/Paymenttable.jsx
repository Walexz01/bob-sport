import React from 'react'
import { useState } from 'react'
import Paymentstablebody from '../components/Paymentstablebody'
import Tablecontainer from '../UI/Tablecontainer'
import Searchinput from '../Utility/Searchinput'

const Paymenttable = () => {
    const [input, setinput] = useState('')
    const handleInput = (e)=>{
      setinput(e.target.value)
    }
  
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
            <Paymentstablebody/>
          </table>

        </Tablecontainer>
    </>
  )
}

export default Paymenttable
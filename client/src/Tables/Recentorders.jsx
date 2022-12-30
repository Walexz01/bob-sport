import React from 'react'
import Ordertablebody from '../components/Ordertablebody'
import Tablecontainer from '../UI/Tablecontainer'

const Recentorders = () => {
  return (
    <>
      <Tablecontainer className='recent__orders' table_name= 'Recent Orders' path='orders' more='See All'>
                <table>
                    <thead>
                      <tr>
                        <th>Order id</th>
                        <th>Customer Name</th>
                        <th>Total Amount </th>
                        <th>Status </th>
                        <th> </th>
                      </tr>
                    </thead>
                      <Ordertablebody/>
                </table>
        </Tablecontainer>  
    </>
  )
}

export default Recentorders
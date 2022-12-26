import React from 'react'
import { Link } from 'react-router-dom'
import { TableData } from '../data'
const Ordertablebody = () => {
  return (
        <>
          <tbody>
        {
          TableData.map(({Order_id,Customer_name,Total_amount,Status_name})=>{
            return(
                <tr key={Order_id}>
                  <td>{Order_id}</td>
                  <td>{Customer_name}</td>
                  <td>{Total_amount}</td>
                  <td><small  className={`${Status_name} == "pending"? 'pending'?${Status_name}=="completed"? 'completed': 'cancel'`}>{Status_name}</small></td>
                  <td><Link>Details</Link></td>
                </tr>
            )
          })
        }
        </tbody>

        </>
  )
}

export default Ordertablebody
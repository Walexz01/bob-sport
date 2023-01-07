import React from 'react'
import Statustd from '../UI/Statustd'

const Paymentstablebody = ({paymentList}) => {
    
  return (
    <>
        <tbody>
            {
                paymentList.map(({id,order_id,customer_name,payment_method,amount_paid,status_name,seller_name,payment_date})=>{
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{order_id}</td>
                            <td>{customer_name}</td>
                            <td>{amount_paid}</td>
                            <td>{status_name}</td>
                            <Statustd status_name={status_name}/>
                            <td>{payment_date}</td>
                            <td>{payment_method}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </>
  )
}

export default Paymentstablebody
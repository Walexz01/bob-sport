import React from 'react'
import Statustd from '../UI/Statustd'

const Paymentstablebody = ({paymentList}) => {
    
  return (
    <>
        <tbody>
            {
                paymentList.map(({id,order_id,customer_name,payment_method,amount_paid,status_name,seller_name,payment_date})=>{
                    let dateTime = payment_date
                    const date = dateTime.slice(0,10)
                    const time = dateTime.slice(11,19)
                    let am__pm = time.slice(0,2)
                    return(
                        <tr key={id}>
                            <td>{id}</td>
                            <td>{order_id}</td>
                            <td>{customer_name}</td>
                            <td>{seller_name}</td>
                            <td>{amount_paid}</td>
                            <td>{status_name}</td>
                            <Statustd status_name={status_name}/>
                            <td>{date}</td>
                            <td>{time} {am__pm >=0 && am__pm <= 11 ? 'AM': 'PM'} </td>
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
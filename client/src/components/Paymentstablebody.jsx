import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Statustd from '../UI/Statustd'

const Paymentstablebody = () => {
    const [paymentList, setPaymentList] = useState([])
    useEffect(() => {
       async function getPaymentLists() {
        const result = await axios.get('http://localhost:3000/api/payments')
        setPaymentList(result.data)
            
        }
        getPaymentLists()
    }, [])
    
  return (
    <>
        <tbody>
            {
                paymentList.map(({payment_id,order_id,customer_name,payment_method,amount_paid,status_name,seller_name,payment_date})=>{
                    return(
                        <tr key={payment_id}>
                            <td>{payment_id}</td>
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
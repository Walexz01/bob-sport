import React from 'react'
import { Link } from 'react-router-dom'
// import { TableData } from '../data'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
const Ordertablebody = () => {
  const [ordersLists, setordersLists] = useState([])
  useEffect(() => {
    async function getOrders(){
      const result = await axios.get('http://localhost:3000/api/orders')
      try {
        setordersLists(result.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
    
  }, [])
  const recentOrders = ordersLists.slice(0,10)
  
  return (
        <>
          <tbody>
        {
          recentOrders.map(({id,customer_name,total_amount,status_name})=>{
            return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{customer_name}</td>
                  <td>{total_amount}</td>
                  <td><small  className={`${status_name} == "pending"? 'pending'?${status_name}=="completed"? 'completed': 'cancel'`}>{status_name}</small></td>
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
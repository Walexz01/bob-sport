import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import Statustd from '../UI/Statustd';

const Ordertablebody = () => {
  let [ordersLists, setordersLists] = useState([])
  const list = ordersLists.sort((a,b) =>{
   return b.id - a.id
  })
  useEffect(() => {
    async function getOrders(){
      try {
        const result = await axios.get('http://localhost:3000/api/orders')
        setordersLists(result.data)
        
      } catch (error) {
        console.log(error)
      }
    }
    getOrders()
    
  }, [])
  const recentOrders = list.slice(0,10)
  
  return (
        <>
          <tbody>
        {
          recentOrders.map(({id,customer_name,total_amount,order_date,status_name,user_name})=>{
              let dateTime = order_date
              const date = dateTime.slice(0,10)

            return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{customer_name}</td>
                  <td>${total_amount}</td>
                  <Statustd status_name= {status_name}/>
                  <td><Link to={`/orders/items/${id}/${customer_name}/${date}/${total_amount}/${status_name}/${user_name}`}>Details</Link></td>

                </tr>
            )
          })
        }
        </tbody>

        </>
  )
}

export default Ordertablebody
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// import { Topcustomers } from '../data'

const Topcusbody = () => {
  const [topCustomer, setTopCustomer] = useState([])
  useEffect(() => {
    async function topCustomer(){
      const result = await axios.get('http://localhost:3000/api/customers/top')
      try {
        setTopCustomer(result.data)
      } catch (error) {
        console.log(error)
        
      }
    }
    topCustomer()
  }, [])
  return (
    <>
        <tbody>
            { topCustomer.map(({id, customer_name,total_order})=>{
                return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{customer_name}</td>
                    <td>{total_order}</td>
                    <td><Link to={`orders/${id}`}>Details</Link></td>
                </tr>
                )
            })
           
            }
        </tbody>        
    </>
  )
}

export default Topcusbody
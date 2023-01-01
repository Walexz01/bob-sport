import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'

const Customerbody = () => {
    const [customerList, setcustomerList] = useState([])
    useEffect(() => {
        async function getAllCustomers(){
            const result = await axios.get('http://localhost:3000/api/customers')
            try {
                setcustomerList(result.data)
                console.log(result.data)
            } catch (error) {
                console.log(error)
                
            }
        }
        getAllCustomers()
    }, [])
    
  return (
    <>
        <tbody>
            { customerList.map(({id,customer_name,address,registration_date,})=>{
                 let dateTime = registration_date
                 const date = dateTime.slice(0,10)
                 const time = dateTime.slice(11,19)
                 let am__pm = time.slice(0,2)

                return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{customer_name}</td>
                  <td>{address}</td>
                  <td>{date}</td>
                  <td>{time} {am__pm >=0 && am__pm <= 11 ? 'AM': 'PM'}</td>
                  <td><Link to={`/orders/list/${customer_name}`}>View Orders </Link></td>
                </tr>
                )
            })
            }

            </tbody>

    </>
  )
}

export default Customerbody
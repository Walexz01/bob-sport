import React from 'react'
import { Link } from 'react-router-dom'
import { Topcustomers } from '../data'

const Topcusbody = () => {
  return (
    <>
        <tbody>
            { Topcustomers.map(({id,Customer_name,Total_order})=>{
                return(
                <tr key={id}>
                    <td>{id}</td>
                    <td>{Customer_name}</td>
                    <td>{Total_order}</td>
                    <td><Link to='/'>Details</Link></td>
                </tr>
                )
            })
           
            }
        </tbody>        
    </>
  )
}

export default Topcusbody
import React from 'react'
import { Topproducts } from '../data'

const Topprobody = () => {
  return (
    <>
        <tbody>
            {
                Topproducts.map(({id,Name,Total_purchase,Unit_price})=>{
                    return(
                    <tr>
                        <td>{id}</td>
                        <td>{Name}</td>
                        <td>{Total_purchase}</td>
                        <td>{Unit_price}</td>
                    </tr>
                    )
                })
            }
        </tbody>
        
    </>
  )
}

export default Topprobody
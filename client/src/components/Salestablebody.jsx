import React from 'react'

const Salestablebody = ({salesList}) => {
  return (
    <>
        <tbody>
            {
               salesList.map(({order_id,product_id,product_name,quantity,unit_price,total_price,order_date}, index)=>{
                return(
            <tr key={index}>
                <td>{order_id} </td>
                <td>{product_id} </td>
                <td>{product_name} </td>
                <td>{quantity} </td>
                <td>${unit_price} </td>
                <td>${total_price} </td>
                <td>{order_date} </td>
            </tr>
                )
               }) 
            }
        </tbody>  
    </>
  )
}

export default Salestablebody
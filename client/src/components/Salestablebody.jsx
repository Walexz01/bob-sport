import React from 'react'

const Salestablebody = ({salesList}) => {
  return (
    <>
        <tbody>
            {
               salesList.map(({order_id,product_id,product_name,quantity,unit_price,total_price,order_date}, index)=>{
                let dateTime = order_date
                const date = dateTime.slice(0,10)
                const time = dateTime.slice(11,19)
                let am__pm = time.slice(0,2)
                return(
            <tr key={index}>
                <td>{order_id} </td>
                <td>{product_id} </td>
                <td>{product_name} </td>
                <td>{quantity} </td>
                <td>${unit_price} </td>
                <td>${total_price} </td>
                <td>{date} </td>
                <td>{time} {am__pm >=0 && am__pm <= 11 ? 'AM': 'PM'} </td>
            </tr>
                )
               }) 
            }
        </tbody>  
    </>
  )
}

export default Salestablebody
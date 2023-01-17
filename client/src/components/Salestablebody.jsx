import React from 'react'

const Salestablebody = ({salesList}) => {
  return (
    <>
        <tbody>
            {
               salesList.map(({Order_id,Product_Id,Product_Name,Quantity,Unit_Price,Order_Date}, index)=>{
                return(
            <tr key={index}>
                <td>{Order_id} </td>
                <td>{Product_Id} </td>
                <td>{Product_Name} </td>
                <td>{Quantity} </td>
                <td>${Unit_Price} </td>
                <td>${ Quantity * Unit_Price} </td>
                <td>{Order_Date} </td>
            </tr>
                )
               }) 
            }
        </tbody>  
    </>
  )
}

export default Salestablebody
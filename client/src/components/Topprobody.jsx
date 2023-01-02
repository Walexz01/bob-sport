import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const Topprobody = () => {
    const [topProducts, settopProducts] = useState([])
    useEffect(() => {
      async function getTopProducts(){
        try {
          const result = await axios.get('http://localhost:3000/api/products/top')
            settopProducts(result.data)
        } catch (error) {
            console.log(error)
        }
      }
      getTopProducts()
    
    }, [])
    
  return (
    <>
        <tbody>
            {
                topProducts.map(({id,name,total_quantity_purchased,unit_price})=>{
                    return(
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{name}</td>
                        <td>{total_quantity_purchased}</td>
                        <td>{unit_price}</td>
                    </tr>
                    )
                })
            }
        </tbody>
        
    </>
  )
}

export default Topprobody
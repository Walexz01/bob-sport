import React from 'react'
import ProductMore from './ProductMore'

const Productbody = ({productList,input,setProductList}) => {
  return (
    <tbody>
    {
      productList.map(({id,name,quantity_in_stock,description,unit_price})=>{
        return(
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{quantity_in_stock}</td>
            <td>{description}</td>
            <td>{unit_price}</td>
            <ProductMore id={id} lists={productList} setList={setProductList}/>                  
          </tr>
        )
      })
    }
  </tbody>
)
}

export default Productbody
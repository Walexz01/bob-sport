import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Pagetop from '../../components/Pagetop'
import Tablecontainer from '../../UI/Tablecontainer'
import Searchinput from '../../Utility/Searchinput'

import "./products.css"
import ProductMore from '../../components/ProductMore'
const Products = () => {
  const [input, setInput] = useState('')
  const [productList, setProductList] = useState([])
    //  this is the function which handel the onchange event on the input
    const handleInput= (e)=>{
      setInput(e.target.value)
    }

    const getProducts = async ()=>{
      const result = await axios.get('http://localhost:3000/api/products')
      setProductList(result.data)
    }
    useEffect(() => {
      getProducts()
    }, [])
    
  return (
    <div className='product__container'>
      {/* This is  the top of the page with containes the name of the page and the link to the appropriate page */}
      <Pagetop path='create' className='product__top' title = 'Products' link_name ='Add Product'/>
      <div className="product__bottom">
      <Tablecontainer className='product__table__container'>
        <div className="search__input__container">
            <Searchinput input={input} handleInput={handleInput}/>
        </div>
        <table className='product__table' >
          <thead>
            <tr>
              <th>Id</th>
              <th>Product Name</th>
              <th>Quantity</th>
              <th>Description</th>
              <th>Unit Price</th>
              <th> </th>
            </tr>
          </thead>
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
                    <ProductMore/>                  
                  </tr>

                )
              })
            }
          </tbody>
        </table>
      </Tablecontainer>
      </div>
    </div>
  )
}

export default Products
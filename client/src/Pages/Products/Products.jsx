import React from 'react'
import Pagetop from '../../components/Pagetop'
import "./products.css"
import Productstable from '../../Tables/Productstable'

const Products = () => {
  return (
    <div className='product__container'>
      {/* This is  the top of the page with containes the name of the page and the link to the appropriate page */}
      <Pagetop path='create' className='product__top' title = 'Products' link_name ='Add Product'/>
      <Productstable/>
    </div>
  )
}

export default Products
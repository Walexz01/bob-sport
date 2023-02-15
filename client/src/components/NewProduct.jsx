import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const NewProduct = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState({name:'',unit_price:'',description:'',quantity_in_stock:''})

  const handlePrice = (e)=>{
    setProducts({...products, unit_price:e.target.value})
  }

  const handleName = (e)=>{
    setProducts({...products, name:e.target.value})
  }
  const handleDescription = (e)=>{
    setProducts({...products, description:e.target.value})
  }
  const handleQuantity = (e)=>{
    setProducts({...products, quantity_in_stock:e.target.value})
  }
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      await axios.post(`http://localhost:3000/api/products`,products)
      setProducts({name:'',unit_price:'',description:''})
      navigate('/products')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='create__customer--container'>
      <form className='create__customer--form' onSubmit={handleSubmit}>
        <h2 className="form__top">Add Product </h2>
        <div className="input__group">
          <span>Name</span>
          <input name='name' value={products.name} onChange={handleName} type="text" placeholder='Enter Product Name' required/>
        </div>
        <div className="input__group">
          <span>Price</span>
          <input name='unit_price' type="number"   value={products.unit_price} onChange={handlePrice} placeholder='Enter Product Price' required/>
        </div>
        <div className="input__group">
          <span>Quantity</span>
          <input name='quantity_in_stock' type="number"  value={products.quantity_in_stock} onChange={handleQuantity} placeholder='Enter Product quantity' required/>
        </div>
        <div className="input__group">
          <span>Description</span>
          <input name='description' value={products.description} onChange={handleDescription} type="text" placeholder='Enter Product description' required/>
        </div>


        <button type='submit'>Add customer</button>
      </form>
      
    </div>
  )
}

export default NewProduct
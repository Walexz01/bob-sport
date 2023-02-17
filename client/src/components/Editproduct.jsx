import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Editproduct = () => {
    const {id} = useParams()
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
  useEffect(() => {
    const loadList = async() =>{
        try {
            const result = await axios.get(`http://localhost:3000/api/products/${id}`)
            const data =result.data[0]
            setProducts(data)
        } catch (error) {
            console.log(error)
        }
    }
    loadList()
  }, [id])
  
  const handleSubmit = async (event)=>{
    event.preventDefault();
    try {
      await axios.put(`http://localhost:3000/api/products/${id}`,products)
      navigate('/products')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className='create__customer--container'>
      <form className='create__customer--form' onSubmit={handleSubmit}>
        <h2 className="form__top">Edit Product </h2>
        <div className="input__group">
          <span>Name</span>
          <input disabled name='name' value={products.name} onChange={handleName} type="text" placeholder='Enter Product Name' required/>
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


        <button type='submit'>Update customer</button>
      </form>
      
    </div>
  )
}

export default Editproduct
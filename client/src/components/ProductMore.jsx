import axios from 'axios'
import React, { useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const ProductMore = ({id,lists,setList}) => {

    const [option, setOption] = useState(false)
  
  return (
    <>
        <td onClick={()=> setOption(prev => !prev)} className='product__options' > <BsThreeDotsVertical/> 
            <div className={ option ? 'product__more option__open' : 'product__more' }>
                <small>
                  <Link to={`edit/${id}`}>Edit</Link>
                </small>
                <small className='delete' onClick={()=> {
                  const newList = lists.filter(list=> list.id !== id)
                  setList(newList)
                  axios.delete(`http://localhost:3000/api/products/${id}`)
                  }}>Delete</small>
            </div>
        </td>   
    </>
  )
}

export default ProductMore
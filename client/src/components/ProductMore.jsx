import React, { useState } from 'react'
import {BsThreeDotsVertical} from 'react-icons/bs'
import { Link } from 'react-router-dom'


const ProductMore = () => {

    const [option, setOption] = useState(false)
  return (
    <>
        <td onClick={()=> setOption(prev => !prev)} className='product__options' > <BsThreeDotsVertical/> 
            <div className={ option ? 'product__more option__open' : 'product__more' }>
                <small>
                  <Link>Edit</Link>
                </small>
                <small>
                  <Link>Delete</Link>
                </small>
            </div>
        </td>   
    </>
  )
}

export default ProductMore
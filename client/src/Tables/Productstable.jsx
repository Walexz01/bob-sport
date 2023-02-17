import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Productbody from '../components/Productbody'
import Tablecontainer from '../UI/Tablecontainer'
import { filterItems } from '../Utility/Filterfunc'
import Pagination from '../Utility/Pagination'
import Searchinput from '../Utility/Searchinput'
import { sliceData } from '../Utility/sliceDataFunc'

const Productstable = () => {
    const [input, setInput] = useState('')
    const [productList, setProductList] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
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

      const filtered = filterItems(productList,input,'name','id','unit_price')

      const count = filtered.length

      const pageSize  = 30

      const slicedCustomer = sliceData(filtered,currentPage,pageSize)

  return (
    <>
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
          <Productbody productList={slicedCustomer} input={input} setProductList={setProductList}/>
        </table>
        <Pagination   count={count} pageSize={pageSize} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      </Tablecontainer>
      </div>   
    </>
  )
}

export default Productstable
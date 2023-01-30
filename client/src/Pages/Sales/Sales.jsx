import React, { useEffect } from 'react'
import { useState } from 'react'
import Pagetop from '../../components/Pagetop'
import Salestable from '../../Tables/Salestable'
import axios from 'axios'
import "./sales.css"

const Sales = () => {
  const [salesList, setSalesList] = useState([])
  const getSales = async ()=>{
    const result = await axios.get('http://localhost:3000/api/sales')
   setSalesList(result.data)
}
  useEffect(() => {
    getSales()
  }, [])
  
  return (
    <div className='sales__page__container'>
      <div className="sales__left">
        <Pagetop title='All Sales' className='sales__page' />
        <Salestable salesList={salesList.sort((a,b)=> a.order_id - b.order_id)}/>
      </div>         
    </div>
  )
}

export default Sales
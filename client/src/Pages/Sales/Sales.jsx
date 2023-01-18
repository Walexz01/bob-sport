import React, { useEffect } from 'react'
import { useState } from 'react'
import Pagetop from '../../components/Pagetop'
import Salestable from '../../Tables/Salestable'
import axios from 'axios'
import Tablecontainer from '../../UI/Tablecontainer'
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

  const topSales = salesList.sort((a,b)=> b.total_price - a.total_price).slice(0,7)

  const recentSales = salesList.sort((a,b)=> b.order_id - a.order_id).slice(0,7)
  return (
    <div className='sales__page__container'>
      <div className="sales__left">
        <Pagetop title='All Sales' className='sales__page' />
        <Salestable salesList={salesList}/>
      </div>
      <div className="sales__right">
          <Tablecontainer className='top__sale__container' table_name='Top Sales' path='sales/top' more="See All" >
            <table>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  topSales.map(({order_id,product_name,quantity,total_price}, index)=>{
                    return(
                    <tr key={index}>
                      <td>{order_id} </td>
                      <td>{product_name}</td>
                      <td>{quantity}</td>
                      <td>{total_price}</td>
                    </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </Tablecontainer>

          {/* Recent sales table */}

          <Tablecontainer className='recent__sale__container' table_name='Recent Sales' path='sales/recent' more="See All" >
          <table>
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Product Name</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                {
                  recentSales.map(({order_id,product_name,quantity,total_price}, index)=>{
                    return(
                    <tr key={index}>
                      <td>{order_id} </td>
                      <td>{product_name}</td>
                      <td>{quantity}</td>
                      <td>{total_price}</td>
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

export default Sales
import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Statustd from '../UI/Statustd'
import Tablecontainer from '../UI/Tablecontainer'

const Orderslist = () => {
    const {id,name}= useParams()
    const [orderLists, setorderLists] = useState([])
    useEffect(() => {
        async function ordersByNAme(){
            try {
                const result = await axios.get(`http://localhost:3000/api/orders/${name}`)
                setorderLists(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        ordersByNAme()
    }, [name])
    const length = orderLists.length    
  return (
    <div className='orderlist__container'>
        <div className="customer__details orders__details--top">
            <div className="customer__details--top">
                <h2>Customer Details</h2>
            </div>
            <div className="customer__details--bottom orders__details--bottom">
                <div className="customer__detail orders__details--group">
                    <span>Customer Id :</span><h3>{id}</h3>
                </div>
                <div className="customer__detail orders__details--group">
                    <span>Customer Name :</span><h3>{name}</h3>
                </div>
                <div className="customer__detail orders__details--group">
                    <span>Total Orders :</span><h3>{length}</h3>
                </div>
            </div>
        </div>
        <div className="orderList--bottom">
            <Tablecontainer className='order__list' table_name= 'Orders List'>
                <table>
                    <thead>
                        <tr>
                        <th>Order id</th>
                        <th>Customer Name</th>
                        <th>Total Amount </th>
                        <th>Order Date </th>
                        <th>Order Time </th>
                        <th>Status </th>
                        <th>Seller </th>
                        <th> </th>
                        </tr>
                    </thead>
                    <tbody>
                        { orderLists.map(({id,customer_name,total_amount,order_date,status_name,user_name})=>{
                            let dateTime = order_date
                            const date = dateTime.slice(0,10)
                            const time = dateTime.slice(11,19)
                            let am__pm = time.slice(0,2)

                            return(
                                <tr key={id}>
                                    <td>{id}</td>
                                    <td>{customer_name}</td>
                                    <td>${total_amount}</td>
                                    <td>{date}</td>
                                    <td>{time} {am__pm >=0 && am__pm <= 11 ? 'AM': 'PM'}</td>
                                    <Statustd status_name={status_name}/>
                                    <td>{user_name}</td>
                                    <td><Link to={`/orders/items/${id}/${customer_name}/${date}/${total_amount}/${status_name}/${user_name}`}>Details</Link></td>
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

export default Orderslist
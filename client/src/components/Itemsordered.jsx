import React from 'react'
import { useEffect } from 'react'
import Tablecontainer from '../UI/Tablecontainer'
import axios from 'axios'
import {  useParams } from 'react-router-dom'
import { useState } from 'react'
import { GiCancel } from 'react-icons/gi'
import { ImCheckmark } from 'react-icons/im'


const Itemsordered = () => {

    const {id,name,date,t_amount,s_name,u_name}= useParams()
    const [orderedItems, setorderedItems] = useState([])
    const total_items = orderedItems.length

    useEffect(() => {
        async function getItems() {
            try {
                const result  = await axios.get(`http://localhost:3000/api/sales/${id}`)
                setorderedItems(result.data)
            } catch (error) {
                console.log(error)
            }
        }
        getItems()
    }, [id])

    const handleApprove = ()=>{
        
    }
    
    const handleReject = ()=>{

    }
    
  return (
    <div className='items__ordered--container'>
        <div className="items__order--top orders__details--top">
        <div className="orders__details--top--group">
            <h2>Order Details</h2>
            {
                (s_name === 'pending') ? <div className="order__action__links--group">
                        <button className='order__btn' onClick={handleApprove}><ImCheckmark/> Approve</button>
                        <button className='order__btn' onClick={handleReject}><GiCancel/> Reject</button>
                    </div> : (s_name === 'completed') ? <h2 className='order__btn order__detail--completed'>completed</h2> : <h2 className='order__detail order__detail--cancel '>cancel</h2>
            }
            
           
        </div>

            <div className="items__order--bottom orders__details--bottom">

                <div className="items__order__detail orders__details--group">
                    <span>Order Id :</span><h3>{id}</h3>
                </div>

                <div className="items__order__detail orders__details--group">
                    <span>Customer :</span><h3>{name}</h3>
                </div>

                <div className="items__order__detail orders__details--group">
                    <span>Date :</span><h3>{date}</h3>
                </div>
                <div className="items__order__detail orders__details--group">
                    <span>Items Total :</span><h3>{total_items}</h3>
                </div>
                <div className="items__order__detail orders__details--group">
                    <span>Total Amount :</span><h3>${t_amount}</h3>
                </div>
                <div className="items__order__detail orders__details--group">
                    <span>Status :</span><h3>{s_name}</h3>
                </div>
                <div className="items__order__detail orders__details--group">
                    <span>Seller :</span><h3>{u_name}</h3>
                </div>

            </div>

        </div>        
        <div className="items__ordered--bottom">
        <Tablecontainer className='order__items--list' table_name= 'Items Ordered'>
                <table>
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Item Name</th>
                            <th>Unit Price</th>
                            <th>Quantity</th>
                            <th>Total Cost</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orderedItems.map(({product_id,item_name,unit_price,quantity,total_cost})=>{
                                return(

                                <tr key={product_id}>
                                    <td>{product_id}</td>
                                    <td>{item_name}</td>
                                    <td>${unit_price}</td>
                                    <td>{quantity}</td>
                                    <td>${total_cost}</td>
                                </tr>
                                    )
        
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <td  className='total_amount_col'>Total</td>
                            <td colSpan="3"></td>
                            <td className='price'>${t_amount}</td>
                        </tr>
                    </tfoot>
                </table>

        </Tablecontainer>
        </div>
    </div>
  )
}

export default Itemsordered
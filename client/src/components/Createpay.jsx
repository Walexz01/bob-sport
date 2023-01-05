import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {FaMoneyBillWave} from 'react-icons/fa'
import {BsCreditCard2BackFill} from 'react-icons/bs'
import {BiTransfer} from 'react-icons/bi'

const Createpay = () => {
    const { id } = useParams()
    const [orderDetails, setorderDetails] = useState([])

    const [input, setInput] = useState({method_name: '',amount: ''})

    const navigate = useNavigate()

    useEffect(() => {
      async function getOrderById(){
        try {
            const result = await axios.get(`http://localhost:3000/api/orders/getbyid/${id}`)
            setorderDetails(result.data)                
        } catch (error) {
            console.log(error)
        }
      }
      getOrderById()
    
    }, [id])

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            await axios.post(`http://localhost:3000/api/payments/${id}`,input)
            setInput({method_name:'',amount: ''})
            navigate('/orders')

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div className='create__payment--container'>        
    {
        orderDetails.map(({customer_name,id,order_date,status_name,total_amount,user_name})=>{
            let dateTime = order_date
            const date = dateTime.slice(0,10)
            const time = dateTime.slice(11,19)
            let am__pm = time.slice(0,2)

            return(
                <div className='create_payment' key={id}>
                    <form onSubmit={handleSubmit}>
                        <div className="create__payment--top">
                            <h2>Order Summary</h2>
                        </div>
                        <div className="create__payment--details">
                            <div className="create__payment--detail--group">
                                <span>Order Id :</span><h3>{id}</h3>
                            </div>
                            <div className="create__payment--detail--group">
                                <span>Customer Name :</span><h3>{customer_name}</h3>
                            </div>
                            <div className="create__payment--detail--group">
                                <span>Order Date :</span><h3>{date}</h3>
                            </div>
                            <div className="create__payment--detail--group">
                                <span>Order Time :</span><h3>{time} {am__pm >=0 && am__pm <= 11 ? 'AM': 'PM'}</h3>
                            </div>
                            <div className="create__payment--detail--group">
                                <span>Seller Name :</span><h3>{user_name} </h3>
                            </div>
                            <div className="create__payment--detail--group total">
                                <span>Total Cost :</span><h3>${total_amount} </h3>
                            </div>
                            <div className="payment__method">
                                <div className="payment__method--title">
                                    <h4>Select payment method</h4>
                                </div>
                                <div className="input__group" onChange={e=> setInput({method_name: e.target.value,  amount: total_amount})}>
                                    <div className="input__label--group">
                                            <input type="radio" name="method_name" id="cash" value='cash' required />
                                        <label htmlFor="cash" id='cash-label'>  
                                            <FaMoneyBillWave/> Cash
                                        </label>
                                    </div>
                                    <div className="input__label--group">
                                            <input type="radio" name="method_name" id="card" value='card'  required/>
                                        <label htmlFor="card">
                                            <BsCreditCard2BackFill/> Card 
                                        </label>
                                    </div>
                                    <div className="input__label--group">
                                            <input type="radio" name="method_name" id="transfer" value='transfer' required />
                                        <label htmlFor="transfer">
                                            <BiTransfer/> Transfer
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="create__btn">
                            <button className='order__btn compete__pay--btn'>Complete payment</button>
                        </div>
                    </form>

                </div>

            )
        })
    }
    </div>
  )
}

export default Createpay
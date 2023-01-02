import React from 'react'
import {Link} from 'react-router-dom'

const Customerbody = ({customerList,input}) => {
    
  return (
    <>
        <tbody>
        {
            customerList.filter(customers => {
                if (input === '') {
                return customers;
                } else if (customers.customer_name.toLowerCase().includes(input.toLowerCase()) || customers.id === Number(input)) {
                return customers;
                }else{
                    return ''
                }
            }).map(({id,customer_name,address,registration_date,})=>{
                 let dateTime = registration_date
                 const date = dateTime.slice(0,10)
                 const time = dateTime.slice(11,19)
                 let am__pm = time.slice(0,2)
                return(
                <tr key={id}>
                  <td>{id}</td>
                  <td>{customer_name}</td>
                  <td>{address}</td>
                  <td>{date}</td>
                  <td>{time} {am__pm >=0 && am__pm <= 11 ? 'AM': 'PM'}</td>
                  <td><Link to={`/orders/list/${id}/${customer_name}`}>View Orders </Link></td>
                </tr>
                )
            })
            }

            </tbody>

    </>
  )
}

export default Customerbody
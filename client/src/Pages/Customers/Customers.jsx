import React from 'react'
import "./customers.css"
import {Link} from 'react-router-dom'
import Tablecontainer from '../../UI/Tablecontainer'
import {BiSearch} from 'react-icons/bi'
import { useState } from 'react'


const Customers = () => {
  const [input, setInput] = useState(' ');
  const handleInput= (e)=>{
    setInput(e.target.value)

  }
  return (
    <div className='customer__container'>
      <div className="customer__top">
        <div className="cuustomer__title">Customers</div>
        <Link className='customer__link' to='create'>New Customer</Link>
      </div>
      <div className="customer__bottom">
        <Tablecontainer className='customer__table__container'>
          <div className="customer__table__container--top">
            <div className="input__group">
              <BiSearch/>
              <input type="text" value={input} onChange={handleInput} placeholder='Search' />
            </div>
            <div className="icon__filter"> filter icon</div>
          </div>
          <table className='customer__table'>
            <thead>
              <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Address</th>
                <th>Registration Date</th>
                <th> </th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>1</td>
                  <td>Walexz</td>
                  <td>iseyin</td>
                  <td>2022562</td>
                  <td><Link>View Orders </Link></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Walexz</td>
                  <td>iseyin</td>
                  <td>2022562</td>
                  <td><Link>View Orders </Link></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Walexz</td>
                  <td>iseyin</td>
                  <td>2022562</td>
                  <td><Link>View Orders </Link></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Walexz</td>
                  <td>iseyin</td>
                  <td>2022562</td>
                  <td><Link>View Orders </Link></td>
                </tr>
                <tr>
                  <td>1</td>
                  <td>Walexz</td>
                  <td>iseyin</td>
                  <td>2022562</td>
                  <td><Link>View Orders </Link></td>
                </tr>
              </tbody>

          </table>
        </Tablecontainer>
      </div>
    </div>
  )
}

export default Customers
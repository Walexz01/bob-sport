import React from 'react'
import Storeinfo from '../../components/Storeinfo'
import { Link } from 'react-router-dom'
// import Circular_progress 
import "./home.css"
import Ordertablebody from '../../components/Ordertablebody'




const Home = () => {
  return (
    <div className='home_page_container'>
      {/* this is the right side for the home page */}
      <div className="right">
        <div className="right__top__container">
          {/* store__info__cards */}
          <Storeinfo/> 
        </div>
        <div className="right__bottom__container">
          {/* recent__orders starts */}
          <div className="recent__orders">
            <div className="recent__orders--top">
              <h2>Recent Orders</h2>
              <Link to='/orders'>See More</Link>          
            </div>
            <table>
              <thead>
                <tr>
                  <th>Order id</th>
                  <th>Customer Name</th>
                  <th>Total Amount </th>
                  <th>Status </th>
                  <th> </th>
                </tr>
              </thead>
                <Ordertablebody/>
            </table>
          </div>
          {/* recent__orders ends */}

        </div>
      </div>

      {/* this is the left side for the home page */}
      <div className="left">
        Thiis is the left side
      </div>

    </div>
  )
}

export default Home
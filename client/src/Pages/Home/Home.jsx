import React from 'react'
import Storeinfo from '../../components/Storeinfo'
// import Circular_progress 
import "./home.css"




const Home = () => {
  return (
    <div className='home_page_container'>
      {/* this is the right side for the home page */}
      <div className="right">

        <div className="right__top__container">
          {/* store__info__cards */}
          <Storeinfo/> 
        </div>

        <div className="recent__orders">

        </div>
        THis is the right side
      </div>

      {/* this is the left side for the home page */}
      <div className="left">
        Thiis is the left side
      </div>

    </div>
  )
}

export default Home